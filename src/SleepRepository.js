const Sleep = require('../src/Sleep');

class SleepRepository {
  constructor (sleepData) {
    this.sleepData = sleepData;
  }

  findUserData(id) {
    const targetUserData = this.sleepData.filter(function(item){
      return item.userID === id;
    });
    return targetUserData;
    const newUser = new Sleep(targetUserData)
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}