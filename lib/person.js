var Person = function(firstName, lastName, options) {
  options = options || {};
  this.firstName = firstName;
  this.lastName = lastName;
  this.weight = options.weight || 150;
  this.friends = [];
  if (options.friends) {
    options.friends.forEach(this.addFriend, this);
  }
};
Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};
Person.prototype.weightInStone = function () {
  return this.weight * 0.071429;
};
Person.prototype.addFriend = function(friend) {
  if (friend instanceof Person) {
    if (this.friends.indexOf(friend) === -1) {
      this.friends.push(friend);
      friend.addFriend(this); 
    }
  } else {
    throw new Error("friends must be people");
  }
};
Person.prototype.removeFriend = function(friend) {
  var index = this.friends.indexOf(friend);
  if (index !== -1) {
    this.friends.splice(index, 1);
    friend.removeFriend(this);
  }
};
Person.prototype.greetPeople = function () {
  return this.friends.map(function greet(friend) {
    return "Hi " + friend.fullName();
  }).join(", ");
};

var betty = new Person("Betty", "Schmidt", {weight: 120, friends:[]});
var louise = new Person("Louise", "Haver", {friends:[betty]});
var mary = new Person("Mary", "M", {friends:[louise]});
var mitch = new Person("Mitch", "B", {weight: 130});
var suzie = new Person("Suize", "D", {friends:[betty]});
var bart = new Person("Mary", "M", {weight: 170, friends:[mitch]});
var ezekiel = new Person("Mary", "M", {friends:[mary]});
var chris = new Person("Chris", "C", {friends:[betty]});
var emily = new Person("Emily", "Wayne", {friends:[betty]});
var richard = new Person("Richard", "L", {friends:[ezekiel]});

console.log(betty.greetPeople());


// Create at least 10 people. Some of these people are friends.

// A Person must be initialized with a firstName and a lastName, plus any of the following optional properties:

// age (in years, default to 30)
// weight (in pounds, default to 150)
// height (in inches, default to a random value between 60 and 78)
// friends (an array of other Person objects, default to empty)
// I should also be able to call these functions on a person:

// fullName should return the person's first name plus their last name
// weightInStone should return the person's weight in stone
// addFriend should take a Person object and add it to the person's friends
// removeFriend should take a name string and remove the person with that name from the person's friends, if there is such a friend
// greetPeople should return a string that greets an optional array of Person objects (default to the person's friends) by their full names, with an optional greeting (default to "Hi"). If no people are provided and the person has no friends.
