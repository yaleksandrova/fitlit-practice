class ActivityRepository {
  constructor(data) {
    this.data = data;
  }

  findUserData(id) {
    const targetUserData = this.data.filter(item => item.userID === id);
    return targetUserData;
  }

  findAvgActivityByDate(date, category) {
    let filteredDateData = this.data.filter(obj => obj.date === date);
    let avgForActivity = filteredDateData.reduce((total, current) => {
      total += current[category];
      return total
    }, 0)
    return Math.round(avgForActivity / filteredDateData.length);
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}