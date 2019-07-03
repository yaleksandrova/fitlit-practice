const currentUserRepo = new UserRepository(userData)
const user = currentUserRepo.findUserData(Math.floor(Math.random() * 50) + 1);
const userObj = new User({...user})
console.log(userObj);

$('#header__h2--name').text(userObj.returnFirstName());
$('#header--address').text(userObj.address);
$('#header--email').text(userObj.email);
$('#header--step-goal').text(userObj.dailyStepGoal);
$('#header--friends').text(userObj.friends);