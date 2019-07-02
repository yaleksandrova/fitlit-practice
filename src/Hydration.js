class Hydration {
  constructor (userData) {
    this.userData = userData;
  }

avgFluidPerDay() {
  const sum = this.userData.reduce(function(currentSum, currentValue){
    currentSum += currentValue.numOunces;
    return currentSum
  }, 0);
  const avgDailyOunces = sum / this.userData.length
  return Math.round(avgDailyOunces);
}

  returnOuncesByDate(specificDate) {
    let targetElement = this.userData.find(function(item){
      return item.date === specificDate;
    });
    return targetElement.numOunces;
  }

  numOfOuncesPerWeek () {

  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}