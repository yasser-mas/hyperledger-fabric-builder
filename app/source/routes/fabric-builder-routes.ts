import express from 'express';
import HTTPErrorResponse from '../util/http/http-error-response';
import HTTPSuccessResponse from '../util/http/http-success-response';
import { FabricBuilderService } from '../services/fabric-builder-service';
import { ERROR_CODES } from '../util/error-codes';
import { FabricBuilderDto } from '../dtos/fabric-builder-dto';

export class FabricBuilderRoutes {
  router: express.Router = express.Router();
  fabricBuilderService = FabricBuilderService.getInsetance();

  constructor() {
    this.constructRoutes();
  }

  constructRoutes() {
    this.router.post(
      '/build',
      async (
        request: express.Request,
        response: express.Response
      ) => {
        let responseBody: HTTPErrorResponse | HTTPSuccessResponse;
        let fabricBuilderDto : FabricBuilderDto = request.body ;

          try {
            responseBody = new HTTPSuccessResponse(await this.fabricBuilderService.build(fabricBuilderDto));
          } catch (error) {
            responseBody = new HTTPErrorResponse([
              { code: error.code || 500, message: error.message }
            ]);
          }
        response.status(200).json(responseBody);
      }
    );


}
}
