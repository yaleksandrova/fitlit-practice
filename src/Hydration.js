class Hydration {
  constructor (userData) {
    this.userData = userData;
  }

  avgFluidPerDay() {
    const sum = this.userData.reduce((currentSum, currentValue) => {
      currentSum += currentValue.numOunces;
      return currentSum;
    }, 0);
    const avgDailyOunces = sum / this.userData.length;
    return Math.round(avgDailyOunces);
  }

  returnOuncesByDate(specificDate) {
    let targetElement = this.userData.find(item => item.date === specificDate);
    return targetElement.numOunces;
  }

  returnOuncesByWeek(specificDate) {
    let index = this.findIndexOfSpecificDate(specificDate);
    let data = [...this.userData];
    let userPastWeek = data.splice(index - 7, index);
    let ounces = userPastWeek.map(day => day.numOunces);
    return ounces.reverse();
  }

  findIndexOfSpecificDate(specificDate) {
    return this.userData.findIndex(item => item.date === specificDate);
  };
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}