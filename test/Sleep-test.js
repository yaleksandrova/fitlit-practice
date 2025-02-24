const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const sampleDataSleep = require('../data/sampleDataSleep');

let sleep, sleep2;

beforeEach(() => {
  sleep = new Sleep(sampleDataSleep);
  sleep2 = new Sleep([sampleDataSleep[0], sampleDataSleep[1], sampleDataSleep[2]]);
});

describe('Sleep', () => {

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  })

  it('should calculate average number of hours slept per day for a user', () => {
    expect(sleep2.avgNumOfHrsSleptPerDay()).to.equal(5)
  });

  it('should calculate average sleep quality per day for a user', () => {
    expect(sleep2.avgSleepQualityPerDay()).to.equal(3)
  });

  it('should return how many hours a user slept in a specific day', () => {
    expect(sleep.returnHrsSleptByDate('2019/06/15')).to.equal(6.1)
  });

  it('should return sleep quality for a user in a specific day', () => {
    expect(sleep.returnSleepQualityByDate('2019/06/15')).to.equal(4)
  });

  it('should return the index of a specific date', () => {
    expect(sleep.findIndexOfSpecificDate('2019/06/17')).to.equal(3)
  });

  it('should return hours slept on a specific date and 7 days prior', () => {
    expect(sleep.returnSleptByWeek('2019/06/22')).to.deep.equal([7, 7.8, 9.3, 10.7, 10.4, 8, 4.1, 6.1, 6.1]);
  });

  it('should return slept quality on a specific date and 7 days prior', () => {
    expect(sleep.returnSleepQltByWeek('2019/06/22')).to.deep.equal([3, 4.2, 1.2, 1.2, 3.1, 2.6, 3.8, 4, 1.1]);
  });

  it('should return average hours slept for all time per user', () => {
    expect(sleep2.returnSleepAllTime('hoursSlept')).to.deep.equal('5.43');
  });

  it('should return average sleep quality for all time per user', () => {
    expect(sleep2.returnSleepAllTime('sleepQuality')).to.deep.equal('2.97');
  });

});