const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const processFiles = require('../domain/services/processFiles');
const serviceapi = require('../domain/services/service-api');
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

const configYml = yaml.load(fs.readFileSync(path.resolve(__dirname,'../config.yml'), 'utf8'));

describe('Procesando informacion', () => {   

    it('debería retornar informacion formateada de un archvio', async () => {
        try {
            console.log('empieza prueba');
            const file = 'test15.csv';
            const data = `file,text,number,hex
                          test2.csv,CFuvQ
                          test2.csv,anNyeeyPGN,726,b9e4e73adc4c98b8284bfc9341185185
                          `;
            const fileData = await processFiles.processCsvFile(file, data);
            console.log('Resultado', fileData.lines.length);
            expect(fileData.lines.length).to.equal(3);
        } catch (error) {
            expect(error.message).to.equal('Error');
        }
    });


    it('debería retornar informacion formateada de varios archvios"', async () => {
        const filesList = [
                "test1.csv",
                "test2.csv",
                "test3.csv",
                "test18.csv",
                "test4.csv",
                "test5.csv",
                "test6.csv",
                "test9.csv",
                "test15.csv"
            ];
        console.log('Mensaje de prueba', filesList);
        const resultado = await processFiles.processCsvFiles(filesList);
        console.log('Mensaje de prueba', resultado);
        expect(resultado.length).to.equal(9);
    });
    // Agrega más pruebas según sea necesario
});