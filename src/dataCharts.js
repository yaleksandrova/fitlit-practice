let hydrationChart = new Chart($('#hydrationChart'), {
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

let stepGoalChart = new Chart($('#dailyStepGoal'), {
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
      text: 'How you stack up to all users'
    }
  }
});

let weeklyStepsChart = new Chart($('#canvas--steps'), {
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

let weeklyStairsChart = new Chart($('#canvas--stairs'), {
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

let weeklyMinsActiveChart = new Chart($('#canvas--mins-active'), {
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