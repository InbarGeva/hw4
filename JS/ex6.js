console.log("Example 6");



//part 1
function getVowels(str) {
    var vowelsCount = 0;

    var input = prompt("please eneter a word:");
    
    for (var i = 0; i <= input.length - 1; i++) {
  
      if (input.charAt(i) == "a" || input.charAt(i) == "e" || input.charAt(i) == "i" || input.charAt(i) == "o" || input.charAt(i) == "u" || input.charAt(i) == "y") {
        vowelsCount ++;
      }
    }
  console.log(`The text contains ${vowelsCount} vowel(s)`)  
  return vowelsCount;
    
  }

  getVowels();
  

//part 2
  function checkPalindrome(input) {

    const len = input.length;
    
    for (let i = 0; i < len / 2; i++) {

        if (input[i] !== input[len - 1 - i]) {
            return console.log("NO");

        }
    }
    return console.log("YES");
}

const input = prompt("please enter a word in order to check if the word is palindrome or not:");

checkPalindrome(input);

