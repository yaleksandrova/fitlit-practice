const chai = require('chai');
const expect = chai.expect;

const HydrationRepository = require('../src/HydrationRepository');
const sampleDataHydration = require('../data/sampleDataHydration');

let hydration;

beforeEach(() => {
  hydration = new HydrationRepository(sampleDataHydration);
});

describe('HydrationRepository', function() {

  it('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', function() {
    expect(hydration).to.be.an.instanceof(HydrationRepository);
  }); 

  it('should find user data given users id', function () {
    expect(hydration.findUserData(7).length).to.equal(3);
  });
})