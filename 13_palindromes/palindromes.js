const palindromes = function (text) {

    //the accepted letters in the palindrome
    const acceptedLetters = "abcdefghijklmnopqrstuvwxyz1234567890"

        //creating a clean string with the given string

     const cleanedString = text.toLowerCase()
        .split('')
        .filter((character) => acceptedLetters.includes(character) )
        .join('')

        //creating a reversed string with the cleaned string
        const reversedString = cleanedString.split('').reverse().join('');

        //matching the strings to check if palindrome or not

        return cleanedString === reversedString;

};

// Do not edit below this line
module.exports = palindromes;
