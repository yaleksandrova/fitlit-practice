const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const sampleDataActivity = require('../data/sampleDataActivity');
const sampleDataUsers = require('../data/sampleDataUsers');

let activity, activity2, activity3;

beforeEach(() => {
  activity = new Activity(sampleDataActivity, sampleDataUsers);
  activity2 = new Activity([sampleDataActivity[0], sampleDataActivity[1], sampleDataActivity[10]], sampleDataUsers);
  activity3 = new Activity([sampleDataActivity[0], sampleDataActivity[1], sampleDataActivity[2]], sampleDataUsers);
});

describe('Activity', () => {

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  }); 

  it('should calculate distance walk in miles specified by a date', () => {
    expect(activity.calculateMilesWalked('2019/06/15')).to.equal(2.91);
  });

  it('should return a user\'s active minutes on a specific day', () => {
    expect(activity2.returnActivityStats('2019/06/15', 'minutesActive')).to.equal(140);
  });

  it('should return check if they reach their step goal on a given day', () => {
    expect(activity.reachStepGoal('2019/06/15')).to.equal('Keep stepping! You missed your goal by 6423 steps!');
  })

  it('should return average minutes active for a given week', () => {
    expect(activity.avgMinsActiveInWeek('2019/06/24')).to.equal(142);
  })

  it('should return all the days a user exceeded their step goal', () => {
    expect(activity3.exceedStepGoalDays()).to.deep.equal(['2019/06/17']);
  })

  it('should return user\'s all-time stair climbing record', () => {
    expect(activity3.findStairsMax()).to.equal(33);
  })

  it('should return activities by the week', () => {
    expect(activity.returnActivityByWeek('2019/06/24', 'numSteps')).to.deep.equal([8015, 6389, 10333, 2634, 14810, 11374, 3486, 12402]);
  })

  it('should return user and friends step total over a week', () => {
    expect(activity.returnFriendsOfUser(sampleDataActivity, "2019/06/23").length).to.equal(3);
  })
})