var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);

//what do we expect to get back?

var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);

//While loops

// 1. Sentry
// 2. Where it starts
// 3. When it ends
// 4. How it changes

var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

// Prediction:
// start: 0, end: 12
// start: 2, end: 10
// start: 4. end: 8

// Rule of thumb - for loops are when you know when the loop will end, While loops is for when you are not sure.

// Reversing an array
// Write a function reverse( arr ) to reverse an array, if we were given...
// And we are going to do it "in place"

// ["a", "b", "c", "d", "e"];
// ["e", "d", "c", "b", "a"];

var arr = ["a", "b", "c", "d", "e"]
function reverse(arr){
    for (var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}
reverse(arr)

//simple way

var arr = ["a", "b", "c", "d", "e"];
var myreverse = arr.reverse();
console.log(myreverse);

// Ceeso way 
// Pseudocode
// Create a function named reverse that takes in an array
// Create a for loop that starts i at 0, ends halfway throught the array, and increments by one

// Inside the for loop:
//      Create a temp variable and store the left partner's value in it
//      Overwrite the left partner with the right partner
//      Overwrite the right partner      

function reverse(arr){
    for(var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1] = temp;
    }
    return arr;
}
console.log(reverse(1, 2, 3, 4, 5, 6))
reverse(1, 2, 3, 4, 5, 6)

// When we console.log a function call, we console.log whatever that function returns