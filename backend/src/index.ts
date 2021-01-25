 import * as express from 'express';
 import * as cors from 'cors';
 import * as bodyParser from 'body-parser';
 import * as compression from 'compression';
 import * as es from 'express-swagger-generator';
 import * as  expressFileUpload from 'express-fileupload';
import UserRoutes from './Infrastructure/HTTP/Routes/UserRoutes';
import ContractRoutes from './Infrastructure/HTTP/Routes/ContractRoutes';
import { establishConnection } from './Infrastructure/Database/connection/GetConnection';

 


 const compress = compression();
 const app = express();
 const expressSwagger = es(app);

 
 const options = {
   swaggerDefinition: {
     basePath: '/',
     produces: ['application/json'],
     schemes: ['http'],
   },
   basedir: __dirname, // app absolute path
   files: [
     `${__dirname}/Infrastructure/HTTP/Routes/*.ts`,

   ], 
 };
 
 expressSwagger(options);
 
 app.use(
   bodyParser.urlencoded({
     extended: false,
   }),
 );
 app.use(
   bodyParser.json({
     limit: '5mb',
   }),
 );
 app.use(compress);
 app.use(cors());
 app.use(expressFileUpload());
 /**
  * App routes definition
  */
 app.use('/users', UserRoutes());
 app.use('/contracts', ContractRoutes());


app.listen(process.env.APP_PORT || 3000, async () => {
    console.log('Server is up listening on port:', process.env.APP_PORT || 3000);
    await establishConnection()
});
  

 
 