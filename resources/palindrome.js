
/**
 * Remove character not used for the palindrome test
 * Regex /[_\W]/g
 * '_' matches the character '_' literally (used because '_' is considered a word character in '\W')
 * '\W' matches any non-word character [^a-zA-Z0-9_]
 * @param {string} string - Unformatted string
 * @returns {string} - String with non word characters (plus '_') removed
 *
 */
let cleanString = function (string) {
   return string.replace(/[_\W]/g, "").toLowerCase();
};

/**
 * Recursive function to check if string is palindrome by comparing first and last character
 * @param {string} string - Formatted string
 * @returns {boolean} - If is palindrome or not
 *
 */
let checkPalindrome = function (string) {
  if (string.length < 2) return true;

  return (string.charAt(0) === string.slice(-1))
    ? checkPalindrome(string.slice(1,-1)) : false;
}

module.exports = (string) => {
  const clean = cleanString(string);
  return checkPalindrome(clean);
}
