const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/SleepRepository');
const sampleDataSleep = require('../data/sampleDataSleep');


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
    expect(sleep.findUserData(3)).to.deep.equal([{
      "userID": 3,
      "date": "2019/06/29",
      "hoursSlept": 6.6,
      "sleepQuality": 4
    }]);
  })

  it('should calculate average sleep quaity for all users', function () {
    const sleep = new SleepRepository(sampleDataSleep);
    expect(sleep.avgSleepQltForAllUsers()).to.equal(3)
  })
});