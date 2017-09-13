const log4js = require('log4js');

log4js.configure({
    appenders: { 
        cheese: { 
            type: 'file', 
            filename: './logs/cheese.log' 
        },
        cookie:{
            type: 'dateFile', 
            filename:   './logs/log_date/datelog.log',
            pattern:    '.yyyy-MM-dd-hh',
            commpress:  true
        },
        everything: { 
            type: 'dateFile', 
            filename: 'all-the-logs.logs', 
            pattern: '.yyyy-MM-dd', 
            compress: true 
        }
    },
    categories: { 
        default: { 
            appenders: ['cheese','cookie','everything'], 
            level: 'info' 
        }
    }
});

//dateFile parrern dd,每天会自动生成一个文件all-the-logs.log.2017-09-13.gz and new all-the-logs.log created

// ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
const logger = log4js.getLogger('everything');
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');


log4js.shutdown(function(){
    logger.warn('logger shutdown');
});