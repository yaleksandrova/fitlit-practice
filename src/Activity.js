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
    let data = [...this.activityData];
    let userPastWeek = data.slice(index - 7, index + 1);
    let activityWeek = userPastWeek.map(day => day[category]);
    return activityWeek.reverse();
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