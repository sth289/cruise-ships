const Ship = require('../src/Ship.js');
const Port = require('../src/port.js');


describe('Ship', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    // const port = new Port('Dover');
    // const ship = new Ship(port);
    const ship = new Ship('Dover');
    expect(ship.currentPort).toBe('Dover');
  });
});
