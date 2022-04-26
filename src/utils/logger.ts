import winston from 'winston';

const level = process.env.LOG_LEVEL || 'info';

if (!Object.keys(winston.config.npm.levels).includes(level)) {
  throw new Error(`Invalid environment variable: LOG_LEVEL. Received value: ${level}. Valid values are: ${Object.keys(winston.config.npm.levels).join(', ')}`);
}

const normalize = winston.format(({ error, ...rest }) => ({
  ...rest,
  traceId: 'FAKE_TRACE_ID',
  userId: 'FAKE_USER_ID',
  ...(error instanceof Error ? { error: { message: error.message, stack: error.stack } } : { error }),
}));

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(winston.format.timestamp(), normalize(), winston.format.json()),
  transports: [new winston.transports.Console()],
});

logger.info({ message: `Log level set to: ${level}` });

export default logger;
