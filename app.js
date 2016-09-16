var userName = prompt('What\'s your name?');
alert ('Welcome to my site ' + userName + '!');

var questionOne = prompt('Was I born in WA?');
questionOne = questionOne.toLowerCase();
if(questionOne === 'yes' || questionOne === 'y') {
  alert ('Nope! Guess again!');
} else if(questionOne === 'no' || questionOne === 'n') {
  alert ('That\'s right, I was born in CA, and moved to Northern Idaho when I was 2!');
} else {
  alert ('Try typing no or n.');
}

var questionTwo = prompt('Do I like to snowboard?');
questionTwo = questionTwo.toLowerCase()
if(questionTwo === 'yes' || questionTwo === 'y') {
  alert ('Yes! It\'s my favorite thing to do!.');
} else if(questionTwo === 'no' || questionTwo === 'n') {
  alert ('Skiing is fun too... I do both!');
} else {
  alert ('Maybe is wrong answer. I LOVE winter sports!');
}

var questionThree = prompt('Do I like movies?');
questionThree = questionThree.toLowerCase()
if(questionThree === 'yes' || questionThree === 'y') {
  alert ('Yes, actually, The Departed is my favorite movie.');
} else if(questionThree === 'no' || questionThree === 'n') {
  alert ('Reading is cool too.');
} else {
  alert ('Welcome to boredom.');
}

var questionFour = prompt('Did I live in Colorado for 4 years?');
questionFour= questionFour.toLowerCase()
if(questionFour === 'yes' || questionFour === 'y') {
  alert ('Yep! You are correct.');
} else if(questionFour === 'no' || questionFour === 'n') {
  alert ('I wish I could clone myself and live in two places at the same time!');
} else {
  alert ('If you aren\'t sure, check out my LinkedIn page!');


}
