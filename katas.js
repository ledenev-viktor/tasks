/*
(1)
In this Kata, you will learn how to remove all empty items in an Array.

In JavaScript, empty items in arrays can be declared by [1, 2,,,3, 4] (Multiple commas without a value in that index)

The values that are not given a value are empty items, and usually add up with others to form <# empty items>; In the example, <2 empty items>

[1, 2, <2 empty items>, 3, 4] should be cleared such that it should be [1, 2, 3, 4]

Example:

Before: [1, 2, 3, <5 empty items>, 4, <1 empty item>, null, undefined];

After: [1, 2, 3, 4, null, undefined];
*/

function clean(array) {
    return array.reduce((acc, cur) => {
        acc.push(cur);
        return acc;
    }, []);
}

console.log(clean([1, 2, 3, ,,,,,, 4, , null, undefined]));

/*
(2)
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

function smallEnough(a, limit) {
    return a.every(num => num <= limit);
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // false
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)) // true


/*
(3)

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);
    numbers.length = 2;
    return numbers.reduce((acc, cur) => acc += cur, 0);
}

console.log(sumTwoSmallestNumbers([5, 12, 19, 22, 8,])) // 13


/*
(4)

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

*/

function divisibleBy(numbers, divisor){
    return numbers.filter(number => number % divisor === 0);
  }

console.log(divisibleBy([1,2,3,4,5,6], 2)) // [2,4,6]


/*
(5)
Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"

*/

function noSpace(x) {
    return x.replace(/\s/g, '');;
}

console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')) // '88Bifk8hB8BB8BBBB888chl8BhBfd'


/*
(6)
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers) {
    return numbers.reduce((acc, cur) => {
        acc = acc.replace('x', cur);

        return acc;
    }, '(xxx) xxx-xxxx');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // "(123) 456-7890"