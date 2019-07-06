const currentUserRepo = new UserRepository(userData)
console.log(currentUserRepo)
let userObj;
let hydration;
// let sleep;
let activity;
let activityRepository = new ActivityRepository(activityData)
// let challenge;


function makeRandomUser() {
  let randomNumber = Math.floor(Math.random() * userData.length)
  let user = currentUserRepo.findUserData(randomNumber);
  userObj = new User({...user})
  populateUserInfo(userObj);
  console.log(userObj)
  getHydrationData(randomNumber);
  // getSleepData(randomNumber)
  getActivityData(randomNumber)
  // getChallengeData()
  createActivityTable();
}

makeRandomUser() 

function populateUserInfo(userObj) {
  $('#header__h2--name').text(userObj.returnFirstName());
  $('#header--address').text(userObj.address);
  $('#header--email').text(userObj.email);
  $('#header--step-goal').text(userObj.dailyStepGoal);
  $('#header--friends').text(userObj.friends);
}

function getHydrationData(randomNumber) {
  const hydrationRepo = new HydrationRepository(hydrationData);
  const userHydrationData = hydrationRepo.findUserData(randomNumber);
  hydration = new Hydration(userHydrationData);
  console.log(hydration)
}

function getActivityData(randomNumber) {
  // const activityRepo = new ActivityRepository(activityData);
  const userActivityData = activityRepository.findUserData(randomNumber);
  activity = new Activity(userActivityData, userData);
  console.log(activity)
}

function createActivityTable() {
  $('#section--activity').prepend(`
        <table>
          <tr>
            <th>Category</th>
            <th>Your Daily Stats!</th>
            <th>The Average</th>
          </tr>
          <tr>
            <td>Number of Steps</td>
            <td id="personal--steps">${activity.returnActivityStats('2019/09/22', 'numSteps')}</td>
            <td id="average--steps">${activityRepository.findAvgActivityByDate('2019/09/22', 'numSteps')}</td>
          </tr>
          <tr>
            <td>Minutes Active</td>
            <td id="personal--active">${activity.returnActivityStats('2019/09/22', 'minutesActive')}</td>
            <td id="average--active">${activityRepository.findAvgActivityByDate('2019/09/22', 'minutesActive')}</td>
          </tr>
          <tr>
            <td>Miles Walked</td>
            <td id="personal--walk">${activity.calculateMilesWalked('2019/09/22')}</td>
          </tr>
        </table>`)
}

// const randomUser = generateRandomUser();


// const currentUserRepo = new UserRepository(userData)
// const user = currentUserRepo.findUserData(randomUser);
// const userObj = new User({...user})
// console.log(userObj);



// const hydrationRepo = new HydrationRepository(hydrationData);
// const userHydrationData = hydrationRepo.findUserData(randomUser);
// const hydrationUser = new Hydration(userHydrationData);
// console.log(hydrationUser)

// function generateRandomUser() {
//   return Math.floor((Math.random() * 50) + 1);
//     };