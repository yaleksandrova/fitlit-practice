const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const sampleHydrationData = require('../data/sampleDataHydration');
const sampleDataFilteredHydration = require('../data/sampleDataFilteredHydration');


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
    const hydration = new Hydration(sampleDataFilteredHydration);
    expect(hydration.avgFluidPerDay()).to.equal(67)
  })

  it('should return how many fluid ounces a user consumed in a specific day', function() {
    const hydration = new Hydration(sampleDataFilteredHydration);
    expect(hydration.returnOuncesByDate('2019/06/18')).to.equal(85)
  })

  it('should return the index of a specific day', function() {
    const hydration = new Hydration(sampleDataFilteredHydration);
    expect(hydration.findIndexOfSpecificDate('2019/06/23')).to.equal(8)
  })

  it('should return the ounces consumed on a specific date and 7 days prior', function() {
    const hydration = new Hydration(sampleDataFilteredHydration);
    expect(hydration.returnOuncesByWeek('2019/06/23')).to.deep.equal([39, 84, 94, 87, 42, 85, 47, 75]);
  })
});