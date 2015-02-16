var Person = function(firstName, lastName, weight, friends){
  this.firstName = firstName;
  this.lastName = lastName;
  this.weight = weight ? weight : 150;
  this.friends = friends ? friends : [];
};
Person.prototype.fullName = function () {
  return(this.firstName + " " + this.lastName);
};
Person.prototype.weightInStone = function () {
  return(this.weight * 0.071429);
};
Person.prototype.addFriend = function (){
  this.friends.push("Sam");
};
Person.prototype.removeFriend = function () {
  var lamefriend = this.friends.indexOf("Louise");
  if (lamefriend !== -1){
    this.friends.splice(lamefriend, 1);
  }
};
Person.prototype.greetPeople = function () {
// for each friend - who is a person object itself - print the greeting with their fullname. I think that means I need to make friends into people
};

var betty = new Person("Betty", "Schmidt", this.weight, this.friends);
console.log(betty.fullName());
console.log(betty.friends);
console.log(betty.weightInStone());
betty.addFriend();
console.log(betty.friends);
betty.removeFriend();
console.log(betty.friends);

var louise = new Person("Louise", "Haver", 150, ["Mary", "Betty"]);
 mary = new Person("Mary", "M", 150, ["Betty", "Louise"]);
 // kelly = new Person("Kelly", "D", 150, ["Betty"]);
 // firstp = new Person("Betty", "Schmidt", 150, ["Mary", "Kelly", "Louise"]);
 // firstp = new Person("Betty", "Schmidt", 150, ["Mary", "Kelly", "Louise"]);
 // firstp = new Person("Betty", "Schmidt", 150, ["Mary", "Kelly", "Louise"]);
 // firstp = new Person("Betty", "Schmidt", 150, ["Mary", "Kelly", "Louise"]);
 // firstp = new Person("Betty", "Schmidt", 150, ["Mary", "Kelly", "Louise"]);
 // firstp = new Person("Betty", "Schmidt", 150, ["Mary", "Kelly", "Louise"]);



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
