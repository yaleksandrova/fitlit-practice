const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const sampleDataUsers = require('../data/sampleDataUsers');

let user;

beforeEach(() => {
  user = new User(sampleDataUsers[0]);
});

describe('User', function() {

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  })

  it('should return the user\'s first name', function() {
    expect(user.returnFirstName()).to.equal('Luisa')
  })
});
