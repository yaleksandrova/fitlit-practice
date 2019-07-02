class Hydration {
  constructor (hydrationData) {
    this.hydrationData = hydrationData;
   
  }

avgFluidPerDay(id) {
   const targetUserData = this.hydrationData.filter(function(item){
     return item.userID === id;
   });
   const sum = targetUserData.reduce(function(currentSum, currentValue){
     currentSum += currentValue.numOunces;
     return currentSum
   }, 0);
   const avgDailyOunces = sum / targetUserData.length
   return Math.round(avgDailyOunces);
}

  returnOuncesByDate(specificDate) {
    
  }

  numOfOuncesPerWeek () {

  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}