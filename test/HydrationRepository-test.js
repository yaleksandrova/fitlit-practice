const chai = require('chai');
const expect = chai.expect;

const HydrationRepository = require('../src/HydrationRepository');
const sampleDataHydration = require('../data/sampleDataHydration');


describe('HydrationRepository', function() {

  it('should be a function', function() {
    const hydration = new HydrationRepository(sampleDataHydration);
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', function() {
    const hydration = new HydrationRepository(sampleDataHydration);
    expect(hydration).to.be.an.instanceof(HydrationRepository);
  }); 

  it('should find user data given users id', function () {
    const hydration = new HydrationRepository(sampleDataHydration);
    expect(hydration.findUserData(7).length).to.equal(3);
  })
});