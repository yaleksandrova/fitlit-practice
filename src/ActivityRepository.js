const Activity = require('../src/Activity');

class ActivityRepository {
  constructor(data) {
    this.data = data;
  }

  findUserData(id) {
    const targetUserData = this.data.filter(item => item.userID === id);
    const newUser = new Activity(targetUserData);
    return newUser.activityData;
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}