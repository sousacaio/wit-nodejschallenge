import winston, { format } from 'winston';
import expressWinston from 'winston';
import CSV from 'winston-csv-format';


export const myLogger = expressWinston.createLogger({
    transports: [        
        new winston.transports.File({ filename: 'logfile.csv' }),
    ],
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        CSV(['clientIp', 'orderId', 'executionTime', 'statusCode'], { delimiter: ',' }),
    )
   
})

const headers = {
    clientIp: 'clientIp',
    orderId: 'orderId',
    executionTime: 'executionTime',
    statusCode: 'statusCode'
};

myLogger.log('info', headers);