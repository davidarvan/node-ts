import winston from 'winston';


const level = process.env.NODE_ENV === 'production' ? 'error' : 'debug';
const transports = [
  new winston.transports.Console(),
];
const format = winston.format.combine(
  winston.format.colorize(),
  // winston.format.label({ label: prefix }),
  winston.format.timestamp(),
  winston.format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`),
);

const logger = winston.createLogger({
  level,
  format,
  transports,
});


export default logger;
