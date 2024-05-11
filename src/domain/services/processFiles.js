const magic = require('../../util/magic');
const fs = require('fs');
const yaml = require('js-yaml');
const Readable = require('stream').Readable;
const csv = require('csv-parser');
const serviceapi = require('../../domain/services/service-api');

const configYml = yaml.load(fs.readFileSync('./src/config.yml', 'utf8'));

exports.processCsvFiles = async (filesList) => {    
    return new Promise(async (resolve, reject) => {
        magic.LogInfo(`Iniciamos procesando los archivo ${filesList}`);        
        const formattedData = [];        
        for await (file of filesList) {             
            const url = configYml.urlfile + '/' + file;              
            try {                
                const response = await serviceapi.makeRequestGet(url, configYml.token);                 
                const filedata = await processCsvFile(file, response.data);                                
                formattedData.push(filedata);                
            } catch (error) {                
                magic.LogWarning(`Error procesando archivo ${file} =>` + error)
                if(filesList.length === 1){
                    reject(error);
                }                
            }
        }        
        resolve(formattedData);
    });
}

function processCsvFile(file, data) {
    magic.LogInfo(`Iniciamos procesando el archivo ${file}`); 
    return new Promise((resolve, reject) => {
        const csvText = data;
        const csvStream = new Readable();
        csvStream.push(csvText);
        csvStream.push(null); 
        const results = [];

        csvStream
            .pipe(csv())
            .on('data', (row) => {                
                const text = row.text || '';
                const number = row.number ? parseInt(row.number) : 0;
                const hex = row.hex || '';
                const formattedLine = {
                    text: text,
                    number: number,
                    hex: hex
                };
                results.push(formattedLine);
            })
            .on('end', () => {                
                const formattedData = {
                    file: file,
                    lines: results
                };
                resolve(formattedData);                
            })
            .on('error', (error) => {
                magic.LogWarning(`Error procesando archivo ${file} =>` + error)
                //reject(error);
            });
    })
}

