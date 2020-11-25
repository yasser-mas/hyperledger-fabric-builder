import express from 'express';
import * as bodyParser from 'body-parser';
import { erroHandler } from './routes/error-handler';
import { FabricBuilderRoutes } from './routes/fabric-builder-routes';

/*
 * Creating Express App
 * Use Routes
 * Listen to bad requests and handle response
 * Start Server
 *
 */
export class Server {
  private  app: express.Application = express();
  private  fabricBuilderRoutes: FabricBuilderRoutes = new FabricBuilderRoutes();

  constructor() {
  }
  public start(){
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.constructRoutes();
    this.handleBadRequests();
    this.app.use(erroHandler);
    this.startListening();
  }

  private constructRoutes() {
    this.app.get('/', (req, res) => {
      res.send('Welcome to Fabric Builder');
    });
    this.app.use('/builder', this.fabricBuilderRoutes.router);
  }

  private  handleBadRequests() {
    this.app.all('*', (req, res) => {
      res.status(404).send('Page Not Found Error 404 !');
    });
  }

  private startListening() {
    const PORT = Number(process.env.PORT) || 8082;
    const HOST = process.env.HOST || '0.0.0.0';

    // Start Server :)
    this.app.listen(PORT, HOST, () => {
      console.log(`Server Works on host ${HOST} and port ${PORT} `);
    });
  }
}
