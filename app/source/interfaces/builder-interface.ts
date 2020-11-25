import { FabricBuilderDto } from '../dtos/fabric-builder-dto';

export interface IBuilder{

    build(fabricBuilderDto: FabricBuilderDto): any;
}