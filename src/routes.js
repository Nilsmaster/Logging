
// Muuttujien luonti
const express = require('express');
const router = express.Router();
const logger = require('./logger');
const counter = require('./counter');


// Numeron lisäys laskuriin.
router.get('/counter-increase', (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-increase'");
  const value = counter.increase();
  res.json({ count: value });
});

// Laskurin numeron luku
router.get('/counter-read', (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-read'");
  const value = counter.read();
  res.json({ count: value });
});


// Laskurin resetointi
router.get('/counter-reset', (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-reset'");
  const value = counter.reset();
  res.json({ count: value });
});

module.exports = router;
