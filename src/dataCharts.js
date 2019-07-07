console.log(activity.returnActivityByWeek('2019/09/22', 'numSteps'))

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
      borderWidth: 1
      }]
    },
      beginAtZero: true
});

let stepGoalChart = new Chart($('#dailyStepGoal'), {
  type: 'bar',
  data: {
    labels: ['Personal Step Goal', 'The Average'],
    datasets: [{
      label: 'Step Goal',
      data: [userObj.dailyStepGoal, currentUserRepo.avgStepGoal()],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
      }]
    },
      beginAtZero: true
});

// let activityChart = new Chart($('#activityChart'), {
//   type: 'line',
//   data: {
//     labels: ['Today', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
//     datasets: [{
//       label: 'Weekly Activity Report',
//       data: activity.returnActivityByWeek('2019/09/22', 'numSteps'),
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 1
//       }]
//     },
//       beginAtZero: true
// });