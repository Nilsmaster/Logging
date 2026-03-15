

// Muuttujien luonti
const logger = require('./logger');

let count = 0;
// Laskurin luonti ja metodit, miten laskuri toimii
const counter = {

  // Laskurin numeron luku
  read() {
    logger.info(`[COUNTER] read ${count}`);
    return count;
  },

  // Numeron lisäys laskuriin.
  increase() {
    count += 1;
    logger.info(`[COUNTER] increase ${count}`);
    return count;
  },

  // Laskurin resetointi
  reset() {
    count = 0;
    logger.info(`[COUNTER] zeroed ${count}`);
    return count;
  }
};

module.exports = counter;
