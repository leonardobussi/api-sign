const app = require('./main/index');
const keys = require('./main/keys');
//const connection = require('./src/middleware/connection');

app.listen(keys.server.port, (err) => {
    connection.connect();
    if(err) {
        console.log('==> [-]  falha na aplicação');
    } else {
        console.log('==> [+] aplicação funcionando [localhost:3000]');
    }
});