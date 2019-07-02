const Hydration = require('../src/Hydration');

class HydrationRepository {
  constructor (data) {
    this.data = data;
  }

  findUserData(id) {
    const targetUserData = this.data.filter(function(item){
      return item.userID === id;
    });
    return targetUserData;
    const newUser = new Hydration(targetUserData);
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}