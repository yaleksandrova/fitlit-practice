class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  avgNumOfHrsSleptPerDay() {
    const sum = this.sleepData.reduce((currentSum, currentValue) => {
      currentSum += currentValue.hoursSlept;
      return currentSum
    }, 0);
    const avgHrsSlept = sum / this.sleepData.length
    return Math.round(avgHrsSlept);
  }

  avgSleepQualityPerDay() {
    const sum = this.sleepData.reduce((currentSum, currentValue) => {
      currentSum += currentValue.sleepQuality;
      return currentSum
    }, 0);
    const avgSleepQlt = sum / this.sleepData.length
    return Math.round(avgSleepQlt);
  }

  returnHrsSleptByDate(specificDate) {
    let targetElement = this.sleepData.find(item => {
      return item.date === specificDate;
    });
    return targetElement.hoursSlept;
  }

  returnSleepQualityByDate(specificDate) {
    let targetElement = this.sleepData.find(item => {
      return item.date === specificDate;
    });
    return targetElement.sleepQuality;
  }

  returnSleptByWeek(specificDate) {
    let index = this.findIndexOfSpecificDate(specificDate);
    let data = [...this.sleepData];
    let sleepPastWeek = data.splice(index - 8, index + 1);
    let hours = sleepPastWeek.map(day => {
      return day.hoursSlept;
    })
    return hours.reverse();
  }

  findIndexOfSpecificDate(specificDate) {
    return this.sleepData.findIndex(item => {
      return item.date === specificDate;
    });
  };

  returnSleepQltByWeek (specificDate) {
    let index = this.findIndexOfSpecificDate(specificDate);
    let data = [...this.sleepData];
    let sleepQltPastWeek = data.splice(index - 8, index + 1);
    let hours = sleepQltPastWeek.map(day => {
      return day.sleepQuality;
    })
    return hours.reverse();
  }

  returnSleepAllTime(category) {
    let result = this.sleepData.reduce((acc, curr) => {
      acc += curr[category];
      return acc
    }, 0)
    let final = result / this.sleepData.length;
    return final.toFixed(2)
  }
}

if (typeof module !== 'undefined') {
module.exports = Sleep;
}