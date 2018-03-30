var log4js = require('log4js');

log4js.configure({
    appenders:{
        requests:{ type: 'dateFile', filename: '/tmp/ai/', pattern:"yyyyMMdd.txt",alwaysIncludePattern:true,numBackups:10 }
    },
    categories: {
        default: { appenders: ['requests'], level: 'debug' }
    }
});

var logger = log4js.getLogger('requests');

module.exports = logger;