// const word = "bad";
// newWord = "";

// console.log(word);
// console.log(word.length);

// for (i=wordLength-1; i>= 0; i--){
//   newWord = newWord + word.charAt(i);
  // console.log(newWord);
// }
// console.log(newWord);

function isPalindrome(name){
  let newWord = ""; 
  let wordLength = name.length;
  for (i=wordLength-1; i>= 0; i--){
    newWord = newWord + name.charAt(i); }
  if (name === newWord){ return true;}
  else {return false;}

console.log(isPalindrome("ab"));
 /*
 Create a function that takes a string to return true if it is a palindrome. 
 The function should be called isPalindrom. 
 A palindrome is a word that will be the same forward and backwards 
 example: "mom"  "madam" "dad"
 */
/* 
  Add your pseudocode here
  1. initialize a function to call a string 
  2. function should pass the string 
  3. if the string is can be the same forward and backwards  
  4. return true 
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
