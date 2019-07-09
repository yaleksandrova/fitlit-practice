const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const sampleDataUsers = require('../data/sampleDataUsers');


describe('UserRepository', function() {

  it('should be a function', function() {
    const userRepo = new UserRepository(sampleDataUsers);
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    const userRepo = new UserRepository(sampleDataUsers);
    expect(userRepo).to.be.an.instanceof(UserRepository);
  }); 

  it('should find user data given users id', function () {
    const userRepo = new UserRepository(sampleDataUsers);
    expect(userRepo.findUserData(2)).to.equal(sampleDataUsers[1]);
  })

  it('should calculate average daily steps', function () {
    const userRepo = new UserRepository(sampleDataUsers);
    expect(userRepo.avgStepGoal()).to.equal(5250)
  })
});