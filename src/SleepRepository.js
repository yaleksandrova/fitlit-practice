// const Sleep = require('../src/Sleep');
// const data = require('../data/sampleDataSleep')

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
  console.log(this.sleepData)
  this.sleepData.forEach(function(user){
    let arrayforSingleUserInfo = this.sleepData.filter(function(item){
    // console.log(this.sleepData)
    // console.log(arrayforSingleUserInfo)
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

  usersWithOverThreeSleepQuality(date){
    var arrayOfObjects = this.sleepData; 
    let obj = {}; 

    arrayOfObjects.forEach(function(user){
    const index = arrayOfObjects.findIndex(function(item) {
      return item.date === date;
    });

    let data = [...arrayOfObjects];
    let sleepPastWeek = data.splice(index - 8, index + 1);
    let arrayforSingleUserInfo = sleepPastWeek.map(function(day){
      console.log(arrayforSingleUserInfo)
      return day.sleepQuality;
    })

    // console.log(`For the past week for this specific date, user ${user.userID} had this quality of sleep: ${arrayforSingleUserInfo}`); 
    // console.log("---------------")

    let average = (arrayforSingleUserInfo.reduce(function(currentSum, currentValue){
    currentSum += currentValue;
      return currentSum;
    }, 0)) / arrayforSingleUserInfo.length; 

    // console.log("The average sleep quality for user " + user.userID + " is " + average); 
    // console.log("---------------")
    obj[user.userID] = average;
    
  
    arrayOfObjects.splice(0, index+1); 
     //start at position 0 and get rid of 9
    })

    // console.log(obj); 

    let arr = []; 
    for(let user in obj){
      if(obj[user] > 3){
        arr.push(parseInt(user));
    }
    }

    if(arr.length > 1){
      // console.log(`There are multiple users who averaged a sleep quality greater than 3 for this week: ${arr}`); 
    } else {
    // console.log(`The user with an ID of ${arr[0]} has an average greater than 3`); 
    }

      return arr; 
  }

  usersWithMostSleepHours(specificDate) {
    let sleepObj = {};

      this.sleepData.forEach(userInfo => {
      if (userInfo.date === specificDate) {
        sleepObj[userInfo.userID] = userInfo.hoursSlept;
      }
      console.log(sleep)
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


}


if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}