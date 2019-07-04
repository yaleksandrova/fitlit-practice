const Hydration = require('../src/Hydration');

class HydrationRepository {
  constructor(data) {
    this.data = data;
  }

  findUserData(id) {
    const targetUserData = this.data.filter(function(item){
      return item.userID === id;
    });
    // return targetUserData;
    const newUser = new Hydration(targetUserData);
    return newUser.userData;
    // const userInfo {
    //   user: newUser,
    //   userData: targetUserData
    // }
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}