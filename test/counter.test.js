
// Muuttujien luonti
const { expect } = require('chai');
const counter = require('../src/counter');

describe('Counter', () => {

  // Ennen jokaista testiä, resetoi laskurin nollaan.
  beforeEach(() => {
    counter.reset();
  });

  // Lukee laskurin numeron, pitäisi palauttaa 0.
  describe('read()', () => {
    it('should return 0 as initial value', () => {
      expect(counter.read()).to.equal(0);
    });
  });

  // Numeron lisäys laskuriin, pitäisi palauttaa numero 1.
  describe('increase()', () => {
    it('should increase count by 1', () => {
      counter.increase();
      expect(counter.read()).to.equal(1);
    });

    // Lisää kolme kertaa 1 laskuriin. Pitäisi palauttaa 3.
    it('should increase count by 1 on each call', () => {
      counter.increase();
      counter.increase();
      counter.increase();
      expect(counter.read()).to.equal(3);
    });
  });

  // Lisää kaksi kertaa laskuriin 1, jonka jälkeen resetoi laskurin. Pitäisi palauttaa 0.
  describe('reset()', () => {
    it('should reset count to 0', () => {
      counter.increase();
      counter.increase();
      counter.reset();
      expect(counter.read()).to.equal(0);
    });

    // Lisää yhden, ja resetoi laskurin. Pitäisi palauttaa 0.
    it('should return 0 after reset', () => {
      counter.increase();
      const value = counter.reset();
      expect(value).to.equal(0);
    });
  });

});
