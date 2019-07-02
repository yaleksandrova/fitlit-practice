const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
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
    const hydration = new Hydration([sampleHydrationData[11], sampleHydrationData[12], sampleHydrationData[13]]);
    expect(hydration.avgFluidPerDay()).to.equal(62)
  })

  it('should return how many fluid ounces a user consumed in a specific day', function() {
    const hydration = new Hydration(sampleHydrationData);
    expect(hydration.returnOuncesByDate('2019/06/18')).to.equal(85)

  })
});