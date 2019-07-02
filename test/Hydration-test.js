const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const hydrationData = require('../data/hydration');

describe('Hydration', function() {

  it('should be a function', function() {
    const hydration = new Hydration(hydrationData);
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    const hydration = new Hydration(hydrationData);
    expect(hydration).to.be.an.instanceof(Hydration);
  })

  it('should calculate average fluid per day for a user', function() {
    const hydration = new Hydration(hydrationData);
    expect(hydration.avgFluidPerDay(1)).to.equal()

  })
});