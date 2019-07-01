const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const sampleDataUsers = require('../data/sampleDataUsers');


describe('UserRepository', function() {

  it('should be a function', function() {
    const UserRepo = new UserRepository(sampleDataUsers);
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    const UserRepo = new UserRepository(sampleDataUsers);
    expect(UserRepo).to.be.an.instanceof(UserRepository);
  }); 

  it('should find user data given users id', function () {
    const UserRepo = new UserRepository(sampleDataUsers);
    expect(UserRepo.findUserData(2)).to.equal();
  })

});