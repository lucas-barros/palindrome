let isPalindrome = require('../resources/palindrome');

describe('palindrome', () => {
  it('Is palindrome or not', () => {
    let palindromes = ['A','1', 'ABA', '121','A MAN A PLAN A CANAL PANAMA'];
    let nonPalindromes = ['MACACO', '12'];

    expect(palindromes.filter(isPalindrome)).toEqual(palindromes);
    expect(nonPalindromes.filter(isPalindrome)).toEqual([]);
  });
});
