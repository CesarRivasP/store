import express from 'express';
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';
import jwtAuthz from 'express-jwt-authz';
import bodyParser from 'body-parser';
// crear servidor
const app = express();

// configurar para que utilice json y urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Para que tenga cors habilitado. Asi podra ser consumido desde otro servidor
app.use(cors());

const jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://cesarrivas10.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://productos',
    issuer: 'https://cesarrivas10.auth0.com/',
    algorithms: ['RS256']
});

// endpoints
app.get('/productos', (request, response) => {
  console.log(request);
});

app.listen(5000, () => {
  console.log('Servidor corriendo');
});
