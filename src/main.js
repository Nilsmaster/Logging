
// Muuttujien luonti ja tarvittavien moduulien tuonti
const express = require('express');
const logger = require('./logger');
const routes = require('./routes');

// Express sovellus ja portti
const app = express();
const PORT = 3000;

// Määritellään käytettävät reitit
app.use('/', routes);

// Palvelimen kjäynnistys ja konsolin viesti
const server = app.listen(PORT, () => {
  logger.info('[MAIN] Starting');
});

// Palvelimen sulkeminen kun painetaan Ctrl+C ja konsoli viesti
process.on('SIGINT', () => {
  logger.info('[MAIN] Stopping');
  server.close(() => process.exit(0));
});

module.exports = app;
