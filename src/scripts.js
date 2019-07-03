console.log(Math.floor(Math.random() * 50) + 1);

const currentUserRepo = new UserRepository(userData)
const user = currentUserRepo.findUserData(Math.floor(Math.random() * 50) + 1);
const userObj = new User({...user})
console.log(userObj);