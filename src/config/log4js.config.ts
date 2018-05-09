

import * as path from "path";
import { configure, getLogger, connectLogger } from 'log4js';

/* 	
    【configure 方法 】ts中的interface
    appenders: { [name: string]: Appender; };
	categories: { [name: string]: { appenders: string[]; level: string; } };
	pm2?: boolean;
	pm2InstanceVar?: string;
	levels?: Levels;
	disableClustering?: boolean;
 */

/* 日志配置 */
configure({
    // pm2: true,
    // pm2InstanceVar: "INSTANCE_ID", // 与pm2的配置对应 
    /* 如果您希望所有进程都作为主进程运行*/
    disableClustering: true,
    /* replaceConsole配置，是让所有console输出到日志中，以[INFO] console代替console默认样式。 */
    // replaceConsole: true,
    /**
     * 【可以控制日志的输出级别】
     * log4js的输出级别依次从大到小6个: trace, debug, info, warn, error, fatal
     * 在生产环境中我们可能只关心异常和错误，并不关心调试信息。
     * 而在开发环境中，我们可以需要打印非常多的信息调试代码。
     * logger.trace('trace');
     * logger.debug('debug');
     * logger.info('info');
     * logger.warn('warn');
     * logger.error('error');
     * logger.fatal('fatal');
    */
    categories: {
        /* 意思是 定义一个级别使用 logger console 两个记录器*/
        default: { appenders: ['logger', "console"], level: 'debug' },
        // error: { appenders: ['error'], level: 'error' },
        // zk: { appenders: ['zk'], level: 'info' },
        // monitor: { appenders: ['monitor'], level: 'info' },
        // cron: { appenders: ['cron'], level: 'info' },
    },
    /**
     * 【配置文件的输出源】
     * type类型分为三种：file || dateFile || console
     * console:普通的控制台输出
     * file:输出到文件内，以文件名-文件大小-备份文件个数的形式rolling生成文件
     * dateFile:输出到文件内，以pattern属性的时间格式，以时间的生成文件
    */
    appenders: {
        /* 一个日志记录器 */
        console: {
            type: "console"
        },
        /* 一个日志记录器 */
        logger: {
            /*日志文件类型，可以使用日期作为文件名的占位符*/
            type: 'dateFile',

            /*日志文件名，可以设置相对路径或绝对路径*/
            filename: path.resolve("./logs/"),
            /* filename是否绝对路径 */
            absolute: true,

            /* 占位符，紧跟在filename后面   */
            pattern: "/yyyy-MM-dd_hh.log",
            /* 文件名是否始终包含占位符  */
            alwaysIncludePattern: true,
        },
    },

})

export const logger = getLogger("logger");

export const console = getLogger("console");

/**
 * 设置level为auto
 * 
 * 日志级别对应规则：
 * http responses 3xx, level = WARN
 * http responses 4xx & 5xx, level = ERROR
 * else, level = INFO
*/

/**
 * 可以被记录 throw new HttpException(err.message, HttpStatus.FORBIDDEN);
 * 可以被记录 requerst
 */
export const connectMyLogger = connectLogger(logger, { level: 'auto'/* format: ':method :url' */ });
