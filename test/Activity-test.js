const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const sampleDataActivity = require('../data/sampleDataActivity');


describe('Activity', function() {

  it('should be a function', function() {
    const activity = new Activity(sampleDataActivity);
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', function() {
    const activity = new Activity(sampleDataActivity);
    expect(activity).to.be.an.instanceof(Activity);
  }); 

  it.skip('should calculate distance walk in miles specified by a date', function () {
    const activity = new Activity(sampleDataActivity);
    expect(activity.calculateMilesWalked()).to.equal(3);
  });
})