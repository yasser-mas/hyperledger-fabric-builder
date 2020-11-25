import { safeDump } from 'js-yaml'

export class YamlParserService{


    public static toYaml( jsonObject : any ){
        return safeDump(jsonObject);
    }
}