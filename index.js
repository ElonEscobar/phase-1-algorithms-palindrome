function isPalindrome(word) {
  // Write your algorithm here
  var l = word.length;
  
  for (var i = 0; i < l / 2; i++) {
      if (word.charAt(i) !== word.charAt(l - 1 - i)) {
          return false;
      }
  }
  return true;
}
isPalindrome("racecar");

/* 
  Add your pseudocode here
  1. get length of word
  2. iterate over each character in the word
  3. If the first character is not equal to the last character 
  return false else true
  
*/

/*
  Add written explanation of your solution here
  Check number of characters the passed in argument(word)
  Go through the characters checking if they match the character at their co-responding index
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
