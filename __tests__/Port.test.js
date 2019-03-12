const Port = require('../src/Port.js');

describe('Port', () => {
  const port = new Port('Dover');
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('Port has a name property', () => {
    expect(port.name).toBe('Dover');
  });
});
