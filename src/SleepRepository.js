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

  avgSleepQltForEachUser () {
    let obj = {};
  console.log(this.sleepData);
    for(var i = 1; i < this.sleepData.length; i++){
      const arrayforSingleUserInfo = this.sleepData.filter(function(item){
      return item.userID === this.sleepData[i].userID
    });
  
    let average = (arrayforSingleUserInfo.reduce(function(currentSum, currentValue){
      currentSum += currentValue.sleepQuality;
      return currentSum;
      }, 0)) / arrayforSingleUserInfo.length; 

      obj[this.sleepData[i].userID] = average; 
      }
      
      return obj; 
  }
  
  
  usersWithMostSleepHours(specificDate) {
    let sleepObj = {};
    let userAverages = {};
  
    sampleDataSleep.forEach(userInfo => {
      if (userInfo.date === specificDate) {
        sleepObj[userInfo.userID] = userInfo.hoursSlept;
      }
    })
    
    let arr = [];
     //iterating over the sleepObj 
    for (let user in sleepObj) {
      arr.push(sleepObj[user]); 
    }
      
    arr.sort(function(a,b){
      return b - a
      })
     //descending order 
    greatestVal = arr[0]; 
    const getKeyByVal = () => 
    Object.keys(sleepObj).find(key => sleepObj[key] === greatestVal);
    return getKeyByVal(); 
  }

  usersWithAvgSleepQualityMoreThanThree () {

  }
}


if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}