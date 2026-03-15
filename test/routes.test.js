
// Muuttujien luonti
const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/main');
const counter = require('../src/counter');

describe('Routes', () => {


  // Resetoi laskurin ennen jokaista testiä.
  beforeEach(() => {
    counter.reset();
  });

  // Testaa GET routen, pitäisi palauttaa 200 ja laskurin arvo 0.
  describe('GET /counter-read', () => {
    it('should return 200 with current count', async () => {
      const res = await request(app).get('/counter-read');
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal({ count: 0 });
    });
  });

  // Testaa GET increase routen, pitäisi palauttaa 200 ja laskurin arvo 1.
  describe('GET /counter-increase', () => {
    it('should return 200 and increase the count', async () => {
      const res = await request(app).get('/counter-increase');
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal({ count: 1 });
    });

    // Testaa GET increase routen kaksi kertaa, pitäisi palauttaa 200 ja laskurin arvo 3.
    it('should increase count on each call', async () => {
      await request(app).get('/counter-increase');
      await request(app).get('/counter-increase');
      const res = await request(app).get('/counter-increase');
      expect(res.body).to.deep.equal({ count: 3 });
    });
  });

  // Testaa GET reset routen, pitäisi palauttaa 200 ja kahden laskurin lisäyksen jälkeen resetoi laskurin. Pitäisi palauttaa 0.
  describe('GET /counter-reset', () => {
    it('should return 200 and reset count to 0', async () => {
      await request(app).get('/counter-increase');
      await request(app).get('/counter-increase');
      const res = await request(app).get('/counter-reset');
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal({ count: 0 });
    });
  });

});
