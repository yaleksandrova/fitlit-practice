const currentUserRepo = new UserRepository(userData)
console.log(currentUserRepo)
let userObj;
let hydration;
// let sleep;
// let activity;
// let activityRepository = new ActivityRepository(activityData)
// let challenge;


function makeRandomUser() {
  let randomNumber = Math.floor(Math.random() * userData.length)
  let user = currentUserRepo.findUserData(randomNumber);
  userObj = new User({...user})
  populateUserInfo(userObj);
  console.log(userObj)
  getHydrationData(randomNumber);
  // getSleepData(randomNumber)
  // getActivityData(randomNumber)
  // getChallengeData()
}

makeRandomUser() 

function getHydrationData(randomNumber) {
  const hydrationRepo = new HydrationRepository(hydrationData);
  const userHydrationData = hydrationRepo.findUserData(randomNumber);
  hydration = new Hydration(userHydrationData);
  console.log(hydration)
}

function populateUserInfo(userObj) {
  $('#header__h2--name').text(userObj.returnFirstName());
  $('#header--address').text(userObj.address);
  $('#header--email').text(userObj.email);
  $('#header--step-goal').text(userObj.dailyStepGoal);
  $('#header--friends').text(userObj.friends);
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