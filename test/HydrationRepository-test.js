const chai = require('chai');
const expect = chai.expect;

const HydrationRepository = require('../src/HydrationRepository');
const sampleDataHydration = require('../data/sampleDataHydration');

let hydration;

beforeEach(() => {
  hydration = new HydrationRepository(sampleDataHydration);
});

describe('HydrationRepository', () => {

  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', () => {
    expect(hydration).to.be.an.instanceof(HydrationRepository);
  }); 

  it('should find user data given users id', () => {
    expect(hydration.findUserData(7).length).to.equal(3);
  });
})