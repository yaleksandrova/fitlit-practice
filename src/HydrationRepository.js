class HydrationRepository {
  constructor(data) {
    this.data = data;
  }

  findUserData(id) {
    const targetUserData = this.data.filter(item => item.userID === id);
    return targetUserData;
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}