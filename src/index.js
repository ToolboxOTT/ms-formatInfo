'use strict';
const   server = require('./server'),
        fs = require('fs'),
        yaml = require('js-yaml');

const config = yaml.load(fs.readFileSync('./src/config.yml', 'utf8'));
server.listen(config.port);
console.log(server);
console.log(`Servidor escuchando en puerto ${config.port}`);

server.on('error', err => {
    console.error(err);
});

