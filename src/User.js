class User {
  constructor(userData) {
    this.userData = userData;
  }

  returnFirstName() {
  let firstName = this.userData['name'].split(' ').splice(0, 1).toString();
  return firstName;
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}