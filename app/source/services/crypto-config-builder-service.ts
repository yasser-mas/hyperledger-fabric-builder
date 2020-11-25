import { CryptoConfig, PeerOrg, OrdererOrg } from '../dtos/crypto-config';
import { FabricBuilderDto, Org, Orderer } from '../dtos/fabric-builder-dto';
import { IBuilder } from '../interfaces/builder-interface';
import { CustomError } from '../util/custom-error';
import { ERROR_CODES } from '../util/error-codes';
import { FileDistributorService } from './file-distributor-service';
import { YamlParserService } from './yaml-parser-service';

export class CryptoConfigBuilderService implements IBuilder {
  private static cryptoConfigBuilderService: CryptoConfigBuilderService;
  private fileDistributorService: FileDistributorService = FileDistributorService.getInsetance();

  private constructor() {}

  public static getInsetance(): CryptoConfigBuilderService {
    if (!this.cryptoConfigBuilderService) {
      this.cryptoConfigBuilderService = new CryptoConfigBuilderService();
    }

    return this.cryptoConfigBuilderService;
  }

  async build(fabricBuilderDto: FabricBuilderDto) {

    try {
      await this.buildPeerOrgs(fabricBuilderDto);
      await this.buildOrderer(fabricBuilderDto);
    } catch (error) {
      throw new CustomError(
        ERROR_CODES.UNEXPECTED_ERROR.code,
        ERROR_CODES.UNEXPECTED_ERROR.message
      );
    }

  }

  private async buildPeerOrgs(fabricBuilderDto: FabricBuilderDto) {

    let promisies = fabricBuilderDto.orgs.map((org) => {
      let PeerOrgs: PeerOrg[] = [];
      
      let orgCryptoConfig = {
          Name: org.mspid,
          Domain: org.domain,
          EnableNodeOUs: org.enableNodeOUs,
          Template: {
            Count: org.peers.length,
          },
          Users: {
            Count: org.usersCount,
          },
        };

      PeerOrgs.push(orgCryptoConfig);

      let orgCryptoConfYaml = YamlParserService.toYaml({PeerOrgs});
      return this.fileDistributorService.saveFileToOrgDir(fabricBuilderDto.projectId, org.mspid, 'crypto-config.yaml', orgCryptoConfYaml);
    });
    
    await Promise.all(promisies);
    console.log(4)

  }

  private async buildOrderer(fabricBuilderDto: FabricBuilderDto){
    let OrdererOrgs: OrdererOrg[] = [];
    let ordererInfo = fabricBuilderDto.orderer;

    let ordererCrypto: OrdererOrg = {
      Name: ordererInfo.mspid,
      Domain: ordererInfo.domain,
      Specs: ordererInfo.replicas.map((o) => {
        return {
          Hostname: o.hostName,
        };
      }),
    };

    OrdererOrgs.push(ordererCrypto);

    let ordererCryptoConfYaml = YamlParserService.toYaml({OrdererOrgs});
    await this.fileDistributorService.saveFileToOrderer(fabricBuilderDto.projectId,  'crypto-config.yaml', ordererCryptoConfYaml);
    console.log(5)

  }
}
