import { mkdir , writeFile } from 'fs';
import { resolve  } from 'path';
import { FabricBuilderDto } from '../dtos/fabric-builder-dto';
import {promisify} from 'util';

export class FileDistributorService{
    
    private static fileDistributorService: FileDistributorService;
    private tempPath = resolve(__dirname, '..', 'templates' );
    mkDir = promisify(mkdir);
    writeFile = promisify(writeFile);
    private constructor() {  }
  
    public static getInsetance(): FileDistributorService {
      if (!this.fileDistributorService) {
  
        this.fileDistributorService = new FileDistributorService();
      }
  
      return this.fileDistributorService;
    }
  

    public async initTempDir(fabricBuilderDto: FabricBuilderDto ){

        await Promise.all([
             this.mkDir(resolve(this.tempPath , fabricBuilderDto.projectId , 'network', 'base' ), { recursive: true }),
             this.mkDir(resolve(this.tempPath , fabricBuilderDto.projectId , 'rest-api' ) , { recursive: true } ),
             this.mkDir(resolve(this.tempPath , fabricBuilderDto.projectId , 'chaincode' ) , { recursive: true }),
             this.mkDir(resolve(this.tempPath , fabricBuilderDto.projectId , 'explorer' ) , { recursive: true })
        ]);
        await Promise.all([
            this.buildOrdererssDirs(fabricBuilderDto),
            this.buildOrgsDirs(fabricBuilderDto)
        ]);
    }
    
    private async buildOrdererssDirs(fabricBuilderDto: FabricBuilderDto){
        await this.mkDir(resolve(this.tempPath , fabricBuilderDto.projectId, 'network', 'orderer' ), { recursive: true } );

    }
    
    private async buildOrgsDirs(fabricBuilderDto: FabricBuilderDto){
        let promisis = fabricBuilderDto.orgs.map(org =>{
            return this.mkDir(resolve(this.tempPath , fabricBuilderDto.projectId, 'network', org.mspid ) , { recursive: true });
        });
        
        await Promise.all(promisis);
    }

    public async saveFileToOrgDir( projectId: string ,  orgMspid: string, fileName:string , fileContent: string  ){

        await this.writeFile(resolve(this.tempPath , projectId, 'network', orgMspid , fileName), fileContent);
    }

    public async saveFileToOrderer( projectId: string ,   fileName:string , fileContent: string  ){

        await this.writeFile(resolve(this.tempPath , projectId, 'network', 'orderer' , fileName), fileContent);
    }

}