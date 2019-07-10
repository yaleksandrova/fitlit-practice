class SleepRepository {
  constructor (sleepData) {
    this.sleepData = sleepData;
  }

  findUserData(id) {
    const targetUserData = this.sleepData.filter(function(item){
      return item.userID === id;
    });
      return targetUserData;
  }

  avgSleepQltForEachUser() {
    const arrayOfObjects = this.sleepData;
    const sleepObj = {};
    arrayOfObjects.forEach(user => {
    const arrayforSingleUserInfo = arrayOfObjects.filter(item => item.userID === user.userID);

  const average = (arrayforSingleUserInfo.reduce((currentSum, currentValue) => {
    currentSum += currentValue.sleepQuality;
    return currentSum;
    }, 0)) / arrayforSingleUserInfo.length;
    sleepObj[user.userID] = Math.round(average);
    })
    return sleepObj;
  }

  usersWithOverThreeSleepQuality(specificDate){
    const arrayOfObjects = this.sleepData; 
    const sleepObj = {}; 

    arrayOfObjects.forEach(user => {
    const index = arrayOfObjects.findIndex(item => item.date ===
      specificDate);

    const data = [...arrayOfObjects];
    const sleepPastWeek = data.splice(index - 8, index + 1);
    const arrayforSingleUserInfo = sleepPastWeek.map(day => day.sleepQuality);    

    const average = (arrayforSingleUserInfo.reduce((currentSum, currentValue) => {
      currentSum += currentValue;
        return currentSum;
    }, 0)) / arrayforSingleUserInfo.length;

    sleepObj[user.userID] = average;

    arrayOfObjects.splice(0, index+1); 
    })

    const arr = Object.keys(sleepObj).filter(key => sleepObj[key] > 3)

    return arr;
    }

  usersWithMostSleepHours(specificDate) {
    const arrayOfObjects = this.sleepData;
    const sleepObj = {};

    arrayOfObjects.forEach(userInfo => {
      if (userInfo.date === specificDate) {
        sleepObj[userInfo.userID] = userInfo.hoursSlept;
      }
    })
    const descendingArrayOfValues = Object.values(sleepObj).sort((a, b) =>
    b - a );
    const result = Object.keys(sleepObj).find(key => sleepObj[key] ===
      descendingArrayOfValues[0]);
    return result;
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}