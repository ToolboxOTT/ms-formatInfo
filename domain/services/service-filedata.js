const magic = require('../../util/magic');
const enum_ = require('../../util/enum');
const serviceapi = require('../../domain/services/service-api');
const fs = require('fs');
const yaml = require('js-yaml');
const csv = require('csv-parser');
const processFiles = require('../../domain/services/processFiles');

const configYml = yaml.load(fs.readFileSync('./config.yml', 'utf8'));

exports.GetAll = async (req, res) => {
    magic.LogInfo("Inicio GetAll.......");
    let resp = {};
    const fileName = req.query.fileName;    
    try {        
        error = 0;
        strError = 'error en la estructura del archivo';
        fileList = [];
        const fileData = await serviceapi.makeRequestGet(configYml.urlfiles, configYml.token);        
        fileList = fileData.data;       

        if (typeof fileList === 'object' && fileList.hasOwnProperty('files')) {            
            let filesList = fileList.files;            
            filesList = fileName !== null && fileName !== undefined ? filesList.filter(archivo => archivo === fileName) : filesList;            
            const response = await processFiles.processCsvFiles(filesList);                                    
            return res.status(enum_.CODE_OK).send(response);            
        } else {
            resp = await magic.ResponseService('Failure', enum_.CRASH_LOGIC, strError, '');
            return res.status(enum_.CODE_BAD_REQUEST).send(resp);
        }
    } catch (err) {        
        magic.LogWarning(err);
        resp = await magic.ResponseService('Failure', enum_.CRASH_LOGIC, 'Ha ocurrido un error interno, por favor vuelva a intentar', []);
        return res.status(enum_.CODE_BAD_REQUEST).send(resp);
    }
}

exports.GetFiles = async (req, res) => {    
    magic.LogInfo("Inicio GetFiles.......");
    let resp = {};
    try {        
        error = 0;
        strError = '';
        fileList = {};        
        const fileData = await serviceapi.makeRequestGet(configYml.urlfiles, configYml.token);
        fileList = fileData.data;        
        return res.status(enum_.CODE_OK).send(fileList);
    } catch (err) {        
        magic.LogWarning(err)
        resp = await magic.ResponseService('Failure', enum_.CRASH_LOGIC, 'Ha ocurrido un error interno, por favor vuelva a intentar', '');
        return res.status(enum_.CODE_BAD_REQUEST).send(resp);
    }
}





