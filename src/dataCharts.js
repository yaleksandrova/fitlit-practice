new Chart($('#hydrationChart'), {
  type: 'line',
  data: {
    labels: ['Today', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
    datasets: [{
      label: 'Weekly Water Consumption',
      data: hydration.returnOuncesByWeek('2019/09/22'),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1,
      }]
    },
      beginAtZero: true
});

new Chart($('#dailyStepGoal'), {
  type: 'bar',
  data: {
    labels: ['Step Goal'],
    datasets: [
      {
        label: 'Your Step Goal',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        data: [userObj.dailyStepGoal],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }, {
        label: "The Average",
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        data: [currentUserRepo.avgStepGoal()],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
        }
      ]
    },
    options: {
    title: {
      display: true,
      text: 'How you stack up to all users:'
    }
  }
});

new Chart($('#canvas--steps'), {
  type: 'line',
  data: {
    labels: ['Today', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
    datasets: [{
      label: 'Number of Steps',
      data: activity.returnActivityByWeek('2019/09/22', 'numSteps'),
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1,
      }]
    },
      beginAtZero: true
});

new Chart($('#canvas--stairs'), {
  type: 'line',
  data: {
    labels: ['Today', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
    datasets: [{
      label: 'Flights of Stairs',
      data: activity.returnActivityByWeek('2019/09/22', 'flightsOfStairs'),
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1,
      }]
    },
      beginAtZero: true
});

new Chart($('#canvas--mins-active'), {
  type: 'line',
  data: {
    labels: ['Today', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
    datasets: [{
      label: 'Minutes Active',
      data: activity.returnActivityByWeek('2019/09/22', 'minutesActive'),
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1,
      }]
    },
      beginAtZero: true
});

new Chart($('#sleepChartDate'), {
  type: 'bar',
  data: {
    labels: ['Sleep Data'],
    datasets: [
      {
        label: 'Hours Slept',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        data: [sleep.returnHrsSleptByDate('2019/09/22')],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }, {
        label: "Sleep Quality",
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        data: [sleep.returnSleepQualityByDate('2019/09/22')],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
        }
      ]
    },
    options: {
    title: {
      display: true,
      text: 'Your sleep data for today!'
    }
  }
});

new Chart($('#sleepChartHoursWeek'), {
  type: 'line',
  data: {
    labels: ['Today', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
    datasets: [
    {
      type: 'line',
      label: 'Hours Slept',
      data: sleep.returnSleptByWeek('2019/09/22'),
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: 'rgb(34, 139, 34, 1)',
      borderWidth: 1
    },
    {
      type: 'line',
      label: 'Sleep Quality',
      data: sleep.returnSleepQltByWeek('2019/09/22'),
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1
    }
    ]
    },
    options: {
    title: {
      display: true,
      text: 'Your week at a glance:'
    }
  }
});

new Chart($('#allTimeAvg'), {
  type: 'bar',
  data: {
    labels: ['All Time Sleep Data'],
    datasets: [
      {
        label: 'All Time Hours Slept',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        data: [sleep.returnSleepAllTime('hoursSlept')],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }, {
        label: "All Time Sleep Quality",
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        data: [sleep.returnSleepAllTime('sleepQuality')],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
        }
      ]
    },
    options: {
    title: {
      display: true,
      text: 'Your all time sleep data:'
    }
  }
});

new Chart($('#canvas--step-challenge'), {
  type: 'bar',
  data: {
    labels: activity.returnFriendsOfUser(activityData, '2019/09/22').map(item => item.name),
    datasets: [
    {
      label: 'Step Challenge',
      data: activity.returnFriendsOfUser(activityData, '2019/09/22').map(item => item.steps),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      }]
    },
      beginAtZero: true
});