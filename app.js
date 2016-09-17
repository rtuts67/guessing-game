var userName = prompt('What\'s your name?');
alert ('Welcome to my site ' + userName + '!');

var answerOne = prompt('Was I born in WA?');
answerOne = answerOne.toLowerCase();
if(answerOne === 'yes' || answerOne === 'y') {
  alert ('Nope! Guess again!');
} else if(answerOne === 'no' || answerOne === 'n') {
  alert ('That\'s right, I was born in CA, and moved to Northern Idaho when I was 2!');
} else {
  alert ('Try typing no or n.');
}

var answerTwo = prompt('Do I like to snowboard?');
answerTwo = answerTwo.toLowerCase();
if(answerTwo === 'yes' || answerTwo === 'y') {
  alert ('Yes! It\'s my favorite thing to do!.');
} else if(answerTwo === 'no' || answerTwo === 'n') {
  alert ('Skiing is fun too... I do both!');
} else {
  alert ('Maybe is wrong answer. I LOVE winter sports!');
}

var answerThree = prompt('Do I like movies?');
answerThree = answerThree.toLowerCase();
if(answerThree === 'yes' || answerThree === 'y') {
  alert ('Yes, actually, The Departed is my favorite movie.');
} else if(answerThree === 'no' || answerThree === 'n') {
  alert ('Reading is cool too.');
} else {
  alert ('Welcome to boredom.');
}

var answerFour = prompt('Did I live in Colorado for 4 years?');
answerFour = answerFour.toLowerCase();
if(answerFour === 'yes' || answerFour === 'y') {
  alert ('Yep! You are correct.');
} else if(answerFour === 'no' || answerFour === 'n') {
  alert ('I wish I could clone myself and live in two places at the same time!');
} else {
  alert ('If you aren\'t sure, check out my LinkedIn page!');
}

var answerFive = prompt('Did I go to school in Montana?');
answerFive = answerFive.toLowerCase();
if(answerFive === 'yes' || answerFive === 'y') {
  alert ('Yes, MT is down to earth.');
} else if(answerFour === 'no' || answerFive === 'n') {
  alert ('There is no other place I would rather be.');
} else {
  alert ('MT is the only answer.');
}

var myAnswer = prompt('What pets do I like? Answer 1 for dog, 2 for cat, or 3 for fish!');
var myArray = ['blah','dog', 'cat', 'fish'];
var a = myArray.indexOf('dog');
var b = myArray.indexOf('cat');
var c = myArray.indexOf('fish');
if(myAnswer === a || b || c) {
  alert('Congrats! You guessed right! I like dogs, cats, and fish!');
} else {
  alert('Try again!');
}
