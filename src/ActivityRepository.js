const Activity = require('../src/Activity');

class ActivityRepository {
  constructor(data) {
    this.data = data;
  }

  findUserData(id) {
    const targetUserData = this.data.filter(item => item.userID === id);
    const newUser = new Activity(targetUserData);
    return newUser.activityData;
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


// For all users, what is the average number of:
// stairs climbed for a specified date
// steps taken for a specific date
// minutes active for a specific date
// Make a metric of your own! Document it, calculate it, and display it.