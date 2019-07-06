// const Sleep = require('../src/Sleep');
const data = require('../data/sampleDataSleep')

class SleepRepository {
  constructor (sleepData) {
    this.sleepData = sleepData;
  }

  findUserData(id) {
    const targetUserData = this.sleepData.filter(function(item){
      return item.userID === id;
    });
    return targetUserData;
    // const newUser = new Sleep(targetUserData)
  }

  avgSleepQltForEachUser() {
  let obj = {};

    data.forEach(function(user){
    const arrayforSingleUserInfo = data.filter(function(item){
    return item.userID === user.userID
    })

    let average = (arrayforSingleUserInfo.reduce(function(currentSum, currentValue){
      currentSum += currentValue.sleepQuality;
      return currentSum;
      }, 0)) / arrayforSingleUserInfo.length;

      obj[user.userID] = Math.round(average);
      })
      return obj;
    }


  usersWithMostSleepHours(specificDate) {
    let sleepObj = {};

      data.forEach(userInfo => {
      if (userInfo.date === specificDate) {
        sleepObj[userInfo.userID] = userInfo.hoursSlept;
      }
    })

    let arr = [];
    for (let user in sleepObj) {
      arr.push(sleepObj[user]);
    }

    arr.sort(function(a,b){
      return b - a
      })
    let greatestVal = arr[0];
    const getKeyByVal = () => {
      return Object.keys(sleepObj).find(key => sleepObj[key] === greatestVal);
      }
      return parseInt(getKeyByVal()); 
  }

  usersWithAvgSleepQualityMoreThanThree () {

  }
}


if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}