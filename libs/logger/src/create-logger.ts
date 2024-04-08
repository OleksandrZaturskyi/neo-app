import winston, { Logger, LoggerOptions, transports, format } from 'winston';

const getFormat = format.printf(
  ({ level, message, label, timestamp, ms }) => `${timestamp} [${label}] ${level}: ${message} ${ms}`,
);

const createLogger = (label: string, options?: LoggerOptions): Logger => {
  return winston.createLogger({
    level: 'info',
    transports: [new transports.Console()],
    ...options,
    format: format.combine(
      format.colorize({ all: true }),
      format.label({ label: label ?? 'default' }),
      format.timestamp(),
      format.ms(),
      getFormat,
    ),
  });
};

export default createLogger;
