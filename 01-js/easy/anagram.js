/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  // Convert strings to lowercase
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  // Check if the lengths of the strings are different
  if (lowerStr1.length !== lowerStr2.length) {
    return false;
  }

  // Convert strings to arrays, sort them, and compare
  const sortedStr1 = lowerStr1.split('').sort().join('');
  const sortedStr2 = lowerStr2.split('').sort().join('');

  // Check if the sorted strings are equal
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
