import winston from 'winston';

const level = process.env.LOG_LEVEL || 'info';

if (!Object.keys(winston.config.npm.levels).includes(level)) {
  throw new Error(`Invalid environment variable: LOG_LEVEL. Received value: ${level}. Valid values are: ${Object.keys(winston.config.npm.levels).join(', ')}`);
}

const addTraceId = winston.format((info) => ({ ...info, traceId: 'GET_TRACE_ID' }));

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(winston.format.timestamp(), addTraceId(), winston.format.json()),
  transports: [new winston.transports.Console()],
});

logger.info({ message: `Log level set to: ${level}` });

export default logger;
