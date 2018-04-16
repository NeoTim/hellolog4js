# log4js API

[![Greenkeeper badge](https://badges.greenkeeper.io/NextZeus/hellolog4js.svg)](https://greenkeeper.io/)

[](https://nomiddlename.github.io/log4js-node/index.html)

## CHANGES [相对于v1版本有很大的变动]

- no exit listeners defined for appenders by default. users should call log4js.shutdown in their exit listeners.
- context added to loggers (only logstash uses it so far)
- logstash split into two appenders (udp and http)
- no cwd, reload options in config
- configure only by calling configure, no manual adding of appenders, etc
- config format changed a lot, now need to define named appenders and **at least** one category
- appender format changed, will break any non-core appenders (maybe create adapter?)
- no replacement of console functions


### Log Level

```

* ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF

const logger = log4js.getLogger('everything');
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');

如果everything 定义level : 'warn', trace, debug, info 的log都不会写入文件。

```
