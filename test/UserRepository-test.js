const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const sampleDataUsers = require('../data/sampleDataUsers');

let userRepo;

beforeEach(() => {
  userRepo = new UserRepository(sampleDataUsers);
});

describe('UserRepository', function() {

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  }); 

  it('should find user data given users id', function () {
    expect(userRepo.findUserData(2)).to.equal(sampleDataUsers[1]);
  })

  it('should calculate average daily steps', function () {
    expect(userRepo.avgStepGoal()).to.equal(5250)
  })
});