const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const sampleHydrationData = require('../data/sampleDataHydration');
const sampleDataFilteredHydration = require('../data/sampleDataFilteredHydration');

let hydration, hydration2;

beforeEach(() => {
  hydration = new Hydration(sampleHydrationData);
  hydration2 = new Hydration(sampleDataFilteredHydration);
});

describe('Hydration', () => {

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should calculate average fluid per day for a user', () => {
    expect(hydration2.avgFluidPerDay()).to.equal(67);
  });

  it('should return how many fluid ounces a user consumed in a specific day', () => {
    expect(hydration2.returnOuncesByDate('2019/06/18')).to.equal(85);
  });

  it('should return the index of a specific day', () => {
    expect(hydration2.findIndexOfSpecificDate('2019/06/23')).to.equal(8);
  });

  it('should return the ounces consumed on a specific date and 7 days prior', () => {
    expect(hydration2.returnOuncesByWeek('2019/06/23')).to.deep.equal([39, 84, 94, 87, 42, 85, 47, 75]);
  });
});