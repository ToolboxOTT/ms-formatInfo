'use strict';

const   express     = require('express'),
        router      = express.Router(),
        magic       = require('../util/magic'),
        filedata    = require('../domain/services/service-filedata');

console.log('[[ FILES DATA ]]'); 
magic.LogInfo('[GET] = /file/data');

router.get('/files/data/', filedata.GetAll);
router.get('/files/list/', filedata.GetFiles);

module.exports = router;
