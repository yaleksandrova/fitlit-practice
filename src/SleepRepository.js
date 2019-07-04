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

  avgSleepQltForAllUsersIndv () {
    
    const sum = this.sleepData.reduce(function(currentSum, currentValue){
      currentSum += currentValue.sleepQuality;
      return currentSum;
  }, 0);
    const avgQltSleep = sum / this.sleepData/;
      return Math.round(avgQltSleep);
  }

  usersWithAvgSleepQualityMoreThanThree () {

  }
}


if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}