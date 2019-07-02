const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const sampleHydrationData = require('../data/sampleDataHydration');

describe('Hydration', function() {

  it('should be a function', function() {
    const hydration = new Hydration(sampleHydrationData);
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    const hydration = new Hydration(sampleHydrationData);
    expect(hydration).to.be.an.instanceof(Hydration);
  })

  it('should calculate average fluid per day for a user', function() {
    const hydration = new Hydration(sampleHydrationData);
    expect(hydration.avgFluidPerDay(7)).to.equal(62)
  })
});