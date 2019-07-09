const chai = require('chai');
const expect = chai.expect;

const ActivityRepository = require('../src/ActivityRepository');
const sampleDataActivity = require('../data/sampleDataActivity');

let activityRepo;

beforeEach(() => {
  activityRepo = new ActivityRepository(sampleDataActivity);
});

describe('ActivityRepository', () => {

  it('should be a function', () => {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', () => {
    expect(activityRepo).to.be.an.instanceof(ActivityRepository);
  }); 

  it('should find user data given users id', () => {
    expect(activityRepo.findUserData(7).length).to.equal(3);
  });

  it('should return the average stairs climbed for a specific date', () => {
    expect(activityRepo.findAvgActivityByDate('2019/06/15', 'flightsOfStairs')).to.equal(24);
  })

  it('should return the average steps taken for a specific date', () => {
      expect(activityRepo.findAvgActivityByDate('2019/06/15', 'numSteps')).to.equal(7576);
  })

  it('should return the average minutes active for a specific date', () => {
      expect(activityRepo.findAvgActivityByDate('2019/06/15', 'minutesActive')).to.equal(143);
  })
})