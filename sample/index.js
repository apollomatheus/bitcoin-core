const Client = require('../dist/');
// Instanciate the client
const client = new Client();
// Get info
client.getBestBlockHash().then((help) => console.log(help));