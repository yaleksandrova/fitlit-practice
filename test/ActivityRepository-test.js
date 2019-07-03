const chai = require('chai');
const expect = chai.expect;

const ActivityRepository = require('../src/ActivityRepository');
const sampleDataActivity = require('../data/sampleDataActivity');


describe('ActivityRepository', function() {

  it('should be a function', function() {
    const activity = new ActivityRepository(sampleDataActivity);
    expect(ActivityRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', function() {
    const activity = new ActivityRepository(sampleDataActivity);
    expect(activity).to.be.an.instanceof(ActivityRepository);
  }); 

  it('should find user data given users id', function () {
    const activity = new ActivityRepository(sampleDataActivity);
    expect(activity.findUserData(7).length).to.equal(3);
  });
})