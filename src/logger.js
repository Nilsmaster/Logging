
// Muuttujien luonti
const { createLogger, transports, format } = require('winston');

// Loggerin määrittely, kirjoittaa konsoliin aikaleiman ja viestin.
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
});

module.exports = logger;
