const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const sampleDataSleep = require('../data/sampleDataSleep');

describe('Sleep', function() {

  it('should be a function', function() {
    const sleep = new Sleep(sampleDataSleep);
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    const sleep = new Sleep(sampleDataSleep);
    expect(sleep).to.be.an.instanceof(Sleep);
  })

  it('should calculate average number of hours slept per day for a user', function() {
    const sleep = new Sleep([sampleDataSleep[0], sampleDataSleep[1], sampleDataSleep[2]]);
    expect(sleep.avgNumOfHrsSleptPerDay()).to.equal(6)
  })

  it('should calculate average sleep quality per day for a user', function() {
    const sleep = new Sleep([sampleDataSleep[0], sampleDataSleep[1], sampleDataSleep[2]]);
    expect(sleep.avgSleepQualityPerDay()).to.equal(3)
  })

  it('should return how many hours a user slept in a specific day', function() {
    const sleep = new Sleep(sampleDataSleep);
    expect(sleep.returnHrsSleptByDate('2019/06/15')).to.equal(6.1)
  }) 

  it('should return sleep quality for a user in a specific day', function() {
    const sleep = new Sleep(sampleDataSleep);
    expect(sleep.returnSleepQualityByDate('2019/06/15')).to.equal(2.2)
  }) 

});