class Sleep {
    constructor (sleepData) {
      this.sleepData = sleepData;
    }

  avgNumOfHrsSleptPerDay() {
    const sum = this.sleepData.reduce(function(currentSum, currentValue){
      currentSum += currentValue.hoursSlept;
      return currentSum
    }, 0);
    const avgHrsSlept = sum / this.sleepData.length
    return Math.round(avgHrsSlept);
  }

  avgSleepQualityPerDay() {
    const sum = this.sleepData.reduce(function(currentSum, currentValue){
      currentSum += currentValue.sleepQuality;
      return currentSum
    }, 0);
    const avgSleepQlt = sum / this.sleepData.length
    return Math.round(avgSleepQlt);
  }

  returnHrsSleptByDate(specificDate) {
    let targetElement = this.sleepData.find(function(item){
      return item.date === specificDate;
    });
    return targetElement.hoursSlept;
  }

  returnSleepQualityByDate(specificDate) {
    let targetElement = this.sleepData.find(function(item){
      return item.date === specificDate;
    });
    return targetElement.sleepQuality;
  }

  hrsSleptOverWeek() {

  }
  sleepQltOverWeek () {
    
  }

}










if (typeof module !== 'undefined') {
  module.exports = Sleep;
}