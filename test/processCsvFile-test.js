const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const processFiles = require('../domain/services/processFiles');
const serviceapi = require('../domain/services/service-api');
const fs = require('fs');
const yaml = require('js-yaml');

const configYml = yaml.load(fs.readFileSync('./config.yml', 'utf8'));

describe('processFiles', () => {

    it('debería retornar "Hola mundo"', async () => {
        try {
            console.log('empieza prueba');
            const fileData = await serviceapi.makeRequestGet(configYml.urlfiles, configYml.token);
            console.log('Resultado', fileData);
            expect(fileData.length).to.equal(9);
        } catch (error) {
            expect(error.message).to.equal('Error');
        }
    });


    it('debería retornar "Hola mundo"', async () => {
        const filesList = {
            "files": [                
                "test18.csv"
            ]
        };
        console.log('Mensaje de prueba', filesList);
        const resultado = await processFiles.processCsvFiles(filesList);
        console.log('Mensaje de prueba', resultado);
        expect(resultado.length).to.equal(7);
    });


    /*it('debería retornar "Hola mundo"', async () => {
        const filesList = {
            "files": [
                "test1.csv",
                "test2.csv",
                "test3.csv",
                "test18.csv",
                "test4.csv",
                "test5.csv",
                "test6.csv",
                "test9.csv",
                "test15.csv"
            ]
        };
        console.log('Mensaje de prueba', filesList);
        const resultado = await processFiles.processCsvFiles(filesList);
        console.log('Mensaje de prueba', resultado);
        expect(resultado.length).to.equal(7);
    });*/
    // Agrega más pruebas según sea necesario
});