const Hydration = require('../src/Hydration');

class HydrationRepository {
  constructor(data) {
    this.data = data;
  }

  findUserData(id) {
    const targetUserData = this.data.filter(item => item.userID === id);
    const newUser = new Hydration(targetUserData);
    return newUser.userData;
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}