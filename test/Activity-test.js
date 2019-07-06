const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const sampleDataActivity = require('../data/sampleDataActivity');
const sampleDataUsers = require('../data/sampleDataUsers');

describe('Activity', () => {

  it('should be a function', () => {
    const activity = new Activity(sampleDataActivity);
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    const activity = new Activity(sampleDataActivity);
    expect(activity).to.be.an.instanceof(Activity);
  }); 

  it('should calculate distance walk in miles specified by a date', () => {
    const activity = new Activity(sampleDataActivity, sampleDataUsers);
    expect(activity.calculateMilesWalked('2019/06/15')).to.equal(2.91);
  });

  it('should return a user\'s active minutes on a specific day', () => {
    const activity = new Activity([sampleDataActivity[0], sampleDataActivity[1], sampleDataActivity[10]]);
    expect(activity.returnActivityStats('2019/06/15', 'minutesActive')).to.equal(140);
  });

  it('should return a user\'s average activity for a week', () => {
    const activity = new Activity(sampleDataActivity);

  })

  it('should return check if they reach their step goal on a given day', () => {
    const activity = new Activity(sampleDataActivity, sampleDataUsers);
    expect(activity.reachStepGoal('2019/06/15')).to.equal('Keep stepping! You missed your goal by 6423 steps!');
  })

  it('should return average minutes active for a given week', () => {
    const activity = new Activity(sampleDataActivity);
    expect(activity.avgMinsActiveInWeek('2019/06/24')).to.equal(142);
  })

  it('should return all the days a user exceeded their step goal', () => {
    const activity = new Activity([sampleDataActivity[0], sampleDataActivity[1], sampleDataActivity[2]], sampleDataUsers);
    expect(activity.exceedStepGoalDays()).to.deep.equal(['2019/06/17']);

  })

  it('should return user\'s all-time stair climbing record', () => {
    const activity = new Activity([sampleDataActivity[0], sampleDataActivity[1], sampleDataActivity[2]]);
    expect(activity.findStairsMax()).to.equal(33);
  })
})