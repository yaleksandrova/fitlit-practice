const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/SleepRepository');
const sampleDataSleep = require('../data/sampleDataFilteredSleep');
const sampleSleep = require('../data/sampleDataSleep');



describe('SleepRepository', function() {

  it('should be a function', function() {
    const sleep = new SleepRepository(sampleDataSleep);
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', function() {
    const sleep = new SleepRepository(sampleDataSleep);
    expect(sleep).to.be.an.instanceof(SleepRepository);
  }); 

  it('should find user data given users id', function () {
    const sleep = new SleepRepository(sampleDataSleep);
    expect(sleep.findUserData(1).length).to.equal(8);
  });

  it('should calculate average sleep quaity for each user', function () {
    const sleep = new SleepRepository(sampleSleep);
    expect(sleep.avgSleepQltForEachUser()).to.equal(3)
  })
});