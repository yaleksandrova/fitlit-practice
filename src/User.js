
class User {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.address = obj.address;
    this.email = obj.email;
    this.strideLength = obj.strideLength;
    this.dailyStepGoal = obj.dailyStepGoal;
    this.friends = obj.friends;
  }

  returnFirstName() {
  let firstName = this.name.split(' ').splice(0, 1).toString();
  return firstName;
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}