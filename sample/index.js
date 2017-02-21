const Client = require('../dist/');
// Instanciate the client
const client = new Client();
// Get info
client.getAdminInfo().then((help) => console.log(help));