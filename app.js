'use strict';
var userName = prompt('What\'s your name?');
alert ('Welcome to my site ' + userName + '!');

var funcOne = function() {
  var answerOne = prompt('Was I born in WA?').toLowerCase();

  if(answerOne === 'yes' || answerOne === 'y') {
    alert ('Nope! Guess again!');
  } else if(answerOne === 'no' || answerOne === 'n') {
    alert ('That\'s right, I was born in CA, and moved to Northern Idaho when I was 2!');
  } else {
    alert ('Try typing no or n.');
  }
};
funcOne();

var funcTwo = function() {
  var answerTwo = prompt('Do I like to snowboard?').toLowerCase();

  if(answerTwo === 'yes' || answerTwo === 'y') {
    alert ('Yes! It\'s my favorite thing to do!.');
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    alert('Skiing is fun too... I do both!');
  } else {
    alert('Maybe is wrong answer. I LOVE winter sports!');
  }
};
funcTwo();

var funcThree = function() {
  var answerThree = prompt('Do I like movies?').toLowerCase();

  if(answerThree === 'yes' || answerThree === 'y') {
    alert ('Yes, actually, The Departed is my favorite movie.');
  } else if (answerThree === 'no' || answerThree === 'n') {
    ('Reading is cool too.');
  } else {
    alert ('Welcome to boredom.');
  }
};
funcThree();

var funcFour = function() {
  var answerFour = prompt('Did I live in Colorado for 4 years?').toLowerCase();

  if(answerFour === 'yes' || answerFour === 'y') {
    alert ('Yep! You are correct.');
  } else if(answerFour === 'no' || answerFour === 'n') {
    alert ('I wish I could clone myself and live in two places at the same time!');
  } else {
    alert ('If you aren\'t sure, check out my LinkedIn page!');
  }
};
funcFour();

var funcFive = function() {
  var answerFive = prompt('Did I go to school in Montana?').toLowerCase();

  if(answerFive === 'yes' || answerFive === 'y') {
    alert ('Yes, MT is down to earth.');
  } else if (answerFour === 'no' || answerFive === 'n') {
    alert ('There is no other place I would rather be.');
  } else {
    alert ('MT is the only answer.');
  }
};
funcFive();

var funcSix = function() {
  var myAnswer = prompt('What pets do I like?');
  var myArray = ['dog', 'cat', 'fish'];

  if(myArray.indexOf(myAnswer) === -1) {
    alert ('Try again! I know you can get it.');
  } else {
    alert('That\'s right, I like dogs and cats. Fish are OK.');
  }
};
funcSix();

var funcSeven = function() {
  var rosieChoice = 3;
  var userGuesses = 4;

  for (var i = 0; i < userGuesses; ++i) {
    var answerSeven = parseInt(prompt('I am thinking of a number between 1 and 8. What is it?'));

    if(answerSeven === rosieChoice) {
      alert('You are psychic!');
      break;
    } else if (answerSeven > rosieChoice) {
      alert('Your guess is too high!');
    } else if (answerSeven < rosieChoice) {
      alert('Your guess is too low!');
    } else {
    }
  }
};
funcSeven();
