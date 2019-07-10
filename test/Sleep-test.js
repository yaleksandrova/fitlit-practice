const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const sampleDataSleep = require('../data/sampleDataSleep');

let sleep, sleep2;

beforeEach(() => {
  sleep = new Sleep(sampleDataSleep);
  sleep2 = new Sleep([sampleDataSleep[0], sampleDataSleep[1], sampleDataSleep[2]]);
});

describe('Sleep', function() {

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  })

  it('should calculate average number of hours slept per day for a user', function() {
    expect(sleep2.avgNumOfHrsSleptPerDay()).to.equal(5)
  });

  it('should calculate average sleep quality per day for a user', function() {
    expect(sleep2.avgSleepQualityPerDay()).to.equal(3)
  });

  it('should return how many hours a user slept in a specific day', function() {
    expect(sleep.returnHrsSleptByDate('2019/06/15')).to.equal(6.1)
  });

  it('should return sleep quality for a user in a specific day', function() {
    expect(sleep.returnSleepQualityByDate('2019/06/15')).to.equal(4)
  });

  it('should return the index of a specific date', function() {
    expect(sleep.findIndexOfSpecificDate('2019/06/17')).to.equal(3)
  });

  it('should return hours slept on a specific date and 7 days prior', function() {
    expect(sleep.returnSleptByWeek('2019/06/22')).to.deep.equal([7, 7.8, 9.3, 10.7, 10.4, 8, 4.1, 6.1, 6.1]);
  });

  it('should return slept quality on a specific date and 7 days prior', function() {
    expect(sleep.returnSleepQltByWeek('2019/06/22')).to.deep.equal([3, 4.2, 1.2, 1.2, 3.1, 2.6, 3.8, 4, 1.1]);
  });

});