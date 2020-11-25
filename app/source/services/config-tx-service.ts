import { FabricBuilderDto, Org } from '../dtos/fabric-builder-dto';
import { CustomError } from '../util/custom-error';
import { ERROR_CODES } from '../util/error-codes';
import { ConfigTxDto, ConfigTxOrganization , ConfigTxBasePolicies } from '../dtos/config-tx-dto';
import { YamlParserService } from './yaml-parser-service';

export class ConfigTxService {
  private static configTxService: ConfigTxService;

  private constructor() {}

  public static getInsetance(): ConfigTxService {
    if (!this.configTxService) {
      this.configTxService = new ConfigTxService();
    }
    return this.configTxService;
  }

  async build(fabricBuilderDto: FabricBuilderDto) {
    let configTx: ConfigTxDto;
    try {

        let orgnaizations: ConfigTxOrganization[] = this.buildDefaultOrgs(fabricBuilderDto);
        
        // console.log(YamlParserService.toYaml({orgnaizations}));

    } catch (error) {
      throw new CustomError(
        ERROR_CODES.UNEXPECTED_ERROR.code,
        ERROR_CODES.UNEXPECTED_ERROR.message
      );
    }
  }

  private buildDefaultOrgs(fabricBuilderDto: FabricBuilderDto) : ConfigTxOrganization[] {
    let orgnaizations : ConfigTxOrganization[] = [] ;

    // Add Orderer Base ORG 
    orgnaizations.push({
        Name: fabricBuilderDto.orderer.name,
        ID: fabricBuilderDto.orderer.mspid,
        MSPDir: `orderer/crypto-config/ordererOrganizations/com/msp`,
        Policies: { 
            Readers: {
                Type: "Signature",
                Rule: `OR('${fabricBuilderDto.orderer.mspid}.member')`
            },
            Writers: {
                Type: "Signature",
                Rule: `OR('${fabricBuilderDto.orderer.mspid}.member')`
            },
            Admins: {
                Type: "Signature",
                Rule: `OR('${fabricBuilderDto.orderer.mspid}.admin')`
            }
        }
    });

    // Add Organizations Base ORG 
    fabricBuilderDto.orgs.forEach(org =>{
        let configTxOrg : ConfigTxOrganization = {
            Name: org.name,
            ID: org.mspid,
            MSPDir: `${org.mspid}/crypto-config/peerOrganizations/${org.domain}/msp`,
            Policies: { 
                Readers: {
                    Type: "Signature",
                    Rule: `OR(${org.mspid}.admin, ${org.mspid}.peer, ${org.mspid}.client)`
                },
                Writers: {
                    Type: "Signature",
                    Rule: `OR(${org.mspid}.admin, ${org.mspid}.client)`
                },
                Admins: {
                    Type: "Signature",
                    Rule: `OR(${org.mspid}.admin)`
                },
                Endorsement: {
                    Type: "Signature",
                    Rule: `OR(${org.mspid}.peer)`
                }
            },
            AnchorPeers: []
        };
        org.peers.forEach(peer=>{
            if(peer.isAnchor){
                configTxOrg.AnchorPeers?.push( {
                    Host: `${peer.name}.${org.domain}`,
                    Port: peer.publishedPort
                });
            }
        })

        orgnaizations.push(configTxOrg);
    });


    return orgnaizations;

  }

  private getBasePolicies() : ConfigTxBasePolicies{
        let configTxBasePolicies : ConfigTxBasePolicies = { 
            Readers: {
                Type: "Signature",
                Rule: ""
            },
            Writers: {
                Type: "Signature",
                Rule: ""
            },
            Admins: {
                Type: "Signature",
                Rule: ""
            }
        }
        return configTxBasePolicies;
  }
}
