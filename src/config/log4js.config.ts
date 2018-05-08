

import * as path from "path";

/* 	
    configure 方法 ts中的interface
    appenders: { [name: string]: Appender; };
	categories: { [name: string]: { appenders: string[]; level: string; } };
	pm2?: boolean;
	pm2InstanceVar?: string;
	levels?: Levels;
	disableClustering?: boolean;
 */


/**
  * configure方法为配置log4js对象，内部有levels、appenders、categories三个属性
  * levels:
  *         配置日志的输出级别,共ALL<TRACE<DEBUG<INFO<WARN<ERROR<FATAL<MARK<OFF八个级别,default level is OFF
  *         只有大于等于日志配置级别的信息才能输出出来，可以通过category来有效的控制日志输出级别
  * appenders:
  *         配置文件的输出源，一般日志输出type共有console、file、dateFile三种
  *         console:普通的控制台输出
  *         file:输出到文件内，以文件名-文件大小-备份文件个数的形式rolling生成文件
  *         dateFile:输出到文件内，以pattern属性的时间格式，以时间的生成文件
  * replaceConsole:
  *         是否替换控制台输出，当代码出现console.log，表示以日志type=console的形式输出
  *                 
*/

export default {
    levels: {
        log_file: {
            value: 1,
            colour: "red"
        }
    },
    /* 下面一行应该是用于跟express配合输出web请求url日志的  */
    appenders: {
        /* 定义一个日志记录器 */
        cheese: {
            /*日志文件类型，可以使用日期作为文件名的占位符*/
            type: 'file',

            /*日志文件名，可以设置相对路径或绝对路径*/
            filename: "cheese.log",

            /* 占位符，紧跟在filename后面  */
            // pattern: "debug/yyyyMMddhh.txt", 

            /* //文件最大存储空间，当文件内容超过文件存储空间会自动生成一个文件test.log.1的序列自增长的文件 */
            maxLogSize: 10 * 1024,
            layout: {
                type: 'basic'
            },
            /* default value = 5.当文件内容超过文件存储空间时，备份文件的数量 */
            backups: 5,
            category: 'log_file'
        },
    },


    categories: {
        default: { appenders: ['cheese'], level: 'error' },
        // error: { appenders: ['error'], level: 'error' },
        // zk: { appenders: ['zk'], level: 'info' },
        // monitor: { appenders: ['monitor'], level: 'info' },
        // cron: { appenders: ['cron'], level: 'info' },
    }

}