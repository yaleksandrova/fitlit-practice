// const users = require('../src/users');
class UserRepository {
  constructor (data) {
    this.data = data;
  }

  findUserData (userId) {
  const specificUser = this.data.find(function(user) {
    return user.id === userId;
  });
  return specificUser;
  };

  avgStepGoal () {
  const steps = [];
  this.data.forEach(function(user) {
    steps.push(user.dailyStepGoal);
  });

  const sum = steps.reduce((currentSum, currentValue) => currentSum + currentValue);
  const avgDailyStep = sum / this.data.length;
    return avgDailyStep;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}