class Activity {
  constructor(activityData, userData) {
    this.activityData = activityData;
    this.userData = userData;
  }

  calculateMilesWalked(date) {
    let data = this.findTargetElement(date);
    let miles = data.element.numSteps * data.user[0].strideLength / 5280;
    let roundedMiles = miles.toFixed(2);
    return parseFloat(roundedMiles);
  }

  returnActivityStats(date, category) {
    let targetElement = this.activityData.find(item => item.date === date);
    return targetElement[category];
  }

  reachStepGoal(date) {
    let data = this.findTargetElement(date);
    if (data.element.numSteps > data.user[0].dailyStepGoal) {
      return 'Congrats! You reached your step goal!'
    } else {
      return `Keep stepping! You missed your goal by ${data.user[0].dailyStepGoal - data.element.numSteps} steps!`;
    }
  }

  avgMinsActiveInWeek(date) {
    let index = this.findIndexOfSpecificDate(date);
    let userPastWeek = this.activityData.slice(index - 7, index);
    let avgMinActive = userPastWeek.reduce((total, obj) => {
      total += obj.minutesActive;
      return total;
    }, 0);
    return Math.round(avgMinActive / 7);
  }

  exceedStepGoalDays() {
    let targetUserGoal = this.userData.find(obj => obj.id === this.activityData[0].userID).dailyStepGoal;
    let exceededGoalDays = this.activityData.filter(obj => obj.numSteps > targetUserGoal);
    return exceededGoalDays.map(obj => obj.date)
  }

  findStairsMax() {
    let stairsSet = this.activityData.map(obj => obj.flightsOfStairs);
    return Math.max(...stairsSet);
  }

  returnActivityByWeek(date, category) {
    let index = this.findIndexOfSpecificDate(date);
    let userPastWeek = this.activityData.slice(index - 7, index + 1);
    let activityWeek = userPastWeek.map(day => day[category]);
    return activityWeek.reverse();
  }

  returnFriendsOfUser(fullActivityData, date) {
    let targetFriends = this.userData.find(obj => obj.id === this.activityData[0].userID).friends;
    let userId = this.userData.find(obj => obj.id === this.activityData[0].userID).id;
    targetFriends.unshift(userId);
    let friendObjects = this.userData.reduce((acc, curr) => {
      targetFriends.forEach(id => {
        if (id === curr.id) {
          acc.push(curr)
        }
      })
      return acc;
    }, []);
    return this.filterFullData(fullActivityData, friendObjects, date)
  }

  filterFullData(fullActivityData, friendObjects, specificDate) {
    let targetElements = fullActivityData.reduce((acc, curr) => {
      friendObjects.forEach(obj => {
        if (obj.id === curr.userID) {
          acc.push(curr);
        }
      })
      return acc;
    }, []);
    let friendStepObjects = friendObjects.map(friend => {
      let index = targetElements.filter(element => element.userID === friend.id).findIndex(item => item.date === specificDate);
      return {
        id: friend.id,
        name: friend.name,
        steps: targetElements
        .filter(element => element.userID === friend.id)
        .slice(index - 7, index)
        .map(obj => obj.numSteps)
        .reduce((acc, curr) => acc += curr, 0)
      }
    })
    console.log(friendStepObjects)
    return friendStepObjects
  }

  findIndexOfSpecificDate(date) {
    return this.activityData.findIndex(item => item.date === date);
  }

  findTargetElement(date) {
    let targetElement = this.activityData.find(item => item.date === date);
    let user = this.userData.filter(element => element.id === targetElement.userID);
    return { element: targetElement, user: user };
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}