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
    expect(sleep.findUserData(1).length).to.equal(8);
  });

  it.skip('should calculate average sleep quality for each user', function () {
    const sleep = new SleepRepository(sampleDataSleep);
    expect(sleep.avgSleepQltForEachUser()).to.be.a('object').that.deep.equals({ '1': 3,
  '2': 3,
  '3': 4,
  '4': 4 })
    });

    it.skip('should find users with over three sleep quality', function () {
      const sleep = new SleepRepository(sampleDataSleep);
      expect(sleep.usersWithOverThreeSleepQuality("2019/06/22")).to.equal(2)
      });

    it.skip('should find users with the most sleep hours', function () {
      const sleep = new SleepRepository(sampleDataSleep);
      expect(sleep.usersWithOverThreeSleepQuality("2019/06/22")).to.equal(2)
      });
});