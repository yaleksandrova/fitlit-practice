const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const sampleDataUsers = require('../data/sampleDataUsers');

let user;

beforeEach(() => {
  user = new User(sampleDataUsers[0]);
});

describe('User', () => {

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  })

  it('should return the user\'s first name', () => {
    expect(user.returnFirstName()).to.equal('Luisa')
  })
});
