const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/SleepRepository');
const sampleDataSleep = require('../data/sampleDataSleep');

let sleep;

beforeEach(() => {
  sleep = new SleepRepository(sampleDataSleep);
});


describe('SleepRepository', function() {

  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', function() {
    expect(sleep).to.be.an.instanceof(SleepRepository);
  });

  it('should find user data given users id', function () {
    expect(sleep.findUserData(1).length).to.equal(9);
  });

  it('should calculate average sleep quality for each user', function () {
    expect(sleep.avgSleepQltForEachUser()).to.be.a('object').that.deep.equals({ '1': 3,
  '2': 5 })
    });

  it('should find users with the most sleep hours for a specific date', function () {
      expect(sleep.usersWithMostSleepHours("2019/06/22")).to.equal('1')
    });

  it('should find users with over three sleep quality', function () {
      expect(sleep.usersWithOverThreeSleepQuality("2019/06/22")).to.deep.equal(['2'])
  });
});