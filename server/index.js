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

// web token valido
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

// revisamos y validamos los scopes
const checkScopes = jwtAuthz(['read:productos']); //esto esta indicado en los permisos de auth0

// endpoints
app.get('/productos', jwtCheck, checkScopes, (request, response) => {
  // console.log(request);
  let products = [
     {
         "id" : 0,
         "name" : "HTML5",
         "price" : 25,
         "image" : "camisa_1",
         "description": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
     },
     {
         "id" : 1,
         "name" : "CSS3",
         "price" : 25,
         "image" : "camisa_2",
         "description": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
     },
     {
         "id" : 2,
         "name" : "NodeJS",
         "price" : 30,
         "image" : "camisa_3",
         "description": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
     },
     {
         "id" : 3,
         "name" : "JavaScript",
         "price" : 25,
         "image" : "camisa_4",
         "description": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
     },
     {
         "id" : 4,
         "name" : "Angular",
         "price" : 20,
         "image" : "camisa_5",
         "description": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
     },
     {
         "id" : 5,
         "name" : "Github",
         "price" : 20,
         "image" : "camisa_6",
         "description": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
     },
     {
         "id" : 6,
         "name" : "WordPress",
         "price" : 25,
         "image" : "camisa_7",
         "description": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
     },
     {
         "id" : 7,
         "name" : "React",
         "price" : 20,
         "image" : "camisa_8",
         "description": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
     }
 ];

 response.json(products);
});

app.listen(5000, () => {
  console.log('Servidor corriendo');
});
