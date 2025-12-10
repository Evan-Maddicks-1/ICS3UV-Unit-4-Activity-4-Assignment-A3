/**
* @author Evan Maddicks
* @version 1.0.0
* @date 2025-12-10
* @fileoverview this program will simulate a simple guessing game
*/
// Word Search Program using prompt() and alert()

const sentence = prompt("Please enter a sentence?");
const word = prompt("Please enter a word to search for in your sentence?");

// Check if the word exists in the sentence
if (sentence && word) {
  if (sentence.includes(word)) {
    alert("Hooray, the word " + word + " was found in the sentence: " + sentence);
  } else {
    alert("Sorry, the word " + word + " was not found in the sentence: " + sentence);
  }
} else {
  alert("You must enter both a sentence and a word.");
}
