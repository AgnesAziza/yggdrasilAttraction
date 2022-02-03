require ('dotenv').config(); // on utilise pas d'env pour la config, il y a des fichers de conf pour ça
const http = require('http'); // http pas express ?
const app = require('./app'); // import

const port = process.env.PORT || 3000; 

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});