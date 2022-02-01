var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

// Conditional statement - starts with the "if" keyword
// Another way for us to control the FLOW of our code
// The keyword is followed by a BOOLEAN statement. If the statement resolves to true, then we execute the conditional's CODE BLOCK
if (isSunny) {
  whatToBring += "sunglasses, ";
}
if (temperature < 50) {
  whatToBring += "a coat, ";
}
if (isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);

// Prepare for Downcount
for (var i = 10; i > 0; i--) {
  if (i != 2) {
    console.log(i);
  } else {
    console.log("ignition!");
  }
}

//Count Positives
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
//My code
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    countPositives++;
  }
}
//Concatenation -- adding strings together    
console.log("there are " + countPositives + " positive values");


