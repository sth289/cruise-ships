const Ship = require('../src/Ship.js');
const Port = require('../src/port.js');


describe('Ship', () => {
  const ship = new Ship('Dover');
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    expect(ship.currentPort).toBe('Dover');
  });

  it('can set sail', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
});
