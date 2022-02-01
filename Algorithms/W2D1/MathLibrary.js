// The Math Library
// Predict what each of the following will return. Can we predict the variable random?

var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
// random returns a float inclusive of 0 and less than 1
var random = Math.random();
    
console.log(floor);
console.log(ceiling);
console.log(random);


//Dice Roller
//Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.
function d6() {
    // My answer
    var roll = Math.floor(Math.random() * 6) + 1;
    // your code here
    // true answer is var roll = Math.random(); ***** math.floor(roll)*6+1
    // Should return on INTEGER between 1 and 6 (inclusive)

    console.log(roll)    
    return roll;
}
// (this is for running it 100 times) ***for (var i = i; i <=100; i++)*** {   
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


//Consult the Oracle
//Using the following array, write a function that will answer all of our questions by randomly choosing a response

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function eightBall(question) {
    var fortune = Math.random();
    fortune = Math.floor(fortune* lifesAnswers.length);
    return `${question} ${lifesAnswers[fortune]}`;
}
//FIGURE OUT WHAT TO DO BEFORE YOU FIGURE OUT HOW TO DO IT!
