const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const sampleDataUsers = require('../data/sampleDataUsers');

describe('User', function() {

  it('should be a function', function() {
    const user = new User(sampleDataUsers[0]);
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    const user = new User(sampleDataUsers[0]);
    expect(user).to.be.an.instanceof(User);
  })

  it('should return the user\'s first name', function() {
    const user = new User(sampleDataUsers[0]);
    expect(user.returnFirstName()).to.equal('Luisa')
  })
});
