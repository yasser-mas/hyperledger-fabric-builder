import { ERROR_CODES } from '../util/error-codes';
import { CustomError } from '../util/custom-error';
import { FabricBuilderDto } from '../dtos/fabric-builder-dto';
import { CryptoConfigBuilderService } from './crypto-config-builder-service';
import { IBuilder } from '../interfaces/builder-interface';
import { YamlParserService } from './yaml-parser-service';
import { v4 } from 'uuid';
import { FileDistributorService } from './file-distributor-service';
import { ConfigTxService } from './config-tx-service';

export class FabricBuilderService implements IBuilder {
  private static fabricBuilderService: FabricBuilderService;
  private cryptoConfigBuilderService = CryptoConfigBuilderService.getInsetance();
  private fileDistributorService: FileDistributorService = FileDistributorService.getInsetance();
  private configTxService: ConfigTxService = ConfigTxService.getInsetance();
  
  private constructor() {}

  public static getInsetance(): FabricBuilderService {
   
    if (!FabricBuilderService.fabricBuilderService) {
      FabricBuilderService.fabricBuilderService = new FabricBuilderService();
    }

    return FabricBuilderService.fabricBuilderService;
  }

  async build(fabricBuilderDto: FabricBuilderDto): Promise<any> {
    let responseBody: any;


    try {

      fabricBuilderDto.projectId = v4();
      console.log(1);
      await this.fileDistributorService.initTempDir(fabricBuilderDto);
      console.log(2);

      await this.cryptoConfigBuilderService.build(fabricBuilderDto);

      await this.configTxService.build(fabricBuilderDto);

      console.log(3);
      
      responseBody = fabricBuilderDto;
    } catch (error) {
      console.log(error);
      throw new CustomError(
        ERROR_CODES.UNEXPECTED_ERROR.code,
        ERROR_CODES.UNEXPECTED_ERROR.message
      );
    }

    return responseBody;
  }
}
