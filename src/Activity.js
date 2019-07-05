const UserRepository = require('../src/UserRepository');
const userData = require('../data/users.js');

class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  calculateMilesWalked(date) {
    let data = this.findTargetElement(date);
    let miles = data.element.numSteps * data.user.strideLength / 5280
    let roundedMiles = miles.toFixed(2);
    return parseFloat(roundedMiles);
  }

  returnMinutesOfActivity(date) {
    let targetElement = this.activityData.find(item => item.date === date);
    return targetElement.minutesActive;
  }

  reachStepGoal(date) {
    let data = this.findTargetElement(date);
    if (data.element.numSteps > data.user.dailyStepGoal) {
      return 'Congrats! You reached your step goal!'
    } else {
      return `Keep stepping! You missed your goal by ${data.user.dailyStepGoal - data.element.numSteps} steps!`;
    };
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
    let targetUserGoal = userData.find(obj => obj.id === this.activityData[0].userID).dailyStepGoal;
    let exceededGoalDays = this.activityData.filter(obj => obj.numSteps > targetUserGoal);
    return exceededGoalDays.map(obj => obj.date)
  }

  findStairsMax() {
    let stairsSet = this.activityData.map(obj => obj.flightsOfStairs);
    return Math.max(...stairsSet);
  }

  findIndexOfSpecificDate(date) {
    return this.activityData.findIndex(item => item.date === date);
  }

  findTargetElement(date) {
    let targetElement = this.activityData.find(item => item.date === date);
    let userRepo = new UserRepository(userData);
    let user = userRepo.findUserData(targetElement.userID);
    return { element: targetElement, user: user };
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}