/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/
console.log('This is the homework!');

var toCelsius = (Fahrenheit) => {
    return (Fahrenheit - 32) * (5 / 9);
  };


/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/



// let user1 = new User('brians', 'abc123');
// user1.changePassword('abc123', '123abc'); // Sets the user's password to 123abc

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    changePassword(oldPassword, newPassword) {
        if (this.password == oldPassword) {
            this.password = newPassword;
            console.log(`${this.username}'s password changed to ${newPassword}`)
        } else {
            console.warn('incorrect password')
        };
    };
}


/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/


const arr1 = [-10, -3, 4, -2, 8, 9, -3];
console.log(arr1);

const squaresOfNegatives = (arr) => {
  let negatives = arr.filter(num => num < 0);
  let squareNegatives = negatives.map(num => num ** 2);
  return squareNegatives;
};

let squareMyArrs = squaresOfNegatives(arr1);
console.log(squareMyArrs);


//Brian's answer - combines filter and map
let squareNegatives = arr1.filter((num) => num < 0).map((num) => num ** 2);
console.log(squareNegatives);