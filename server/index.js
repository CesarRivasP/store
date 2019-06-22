import express from 'express';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

const app = express();

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

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});
