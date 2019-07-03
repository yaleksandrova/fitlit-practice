const Activity = require('../src/Activity');

class ActivityRepository {
  constructor(data) {
    this.data = data;
  }

  findUserData(id) {
    const targetUserData = this.data.filter(function(item){
      return item.userID === id;
    });
    return targetUserData;
    const newUser = new Activity(targetUserData);
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}