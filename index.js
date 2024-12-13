/*---qus 1---

function calculateDifference(a,b){
    return (a-b);
}
let  result = calculateDifference(10,5);
console.log(result);

 */

/*---qus 2---

function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(2));

*/

/*---qus 3---

function findMin(numbers) {
    return Math.min.apply(null, numbers);
}
const arr = [5, 3, 9, 1, 6];
console.log(findMin(arr));  // Output: 1

*/

/*---qus 4---

function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = filterEvenNumbers(arr);
console.log(evenNumbers);  // Output: [2, 4, 6, 8]

 */

/*---qus 5---

function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}
const arr = [5, 3, 9, 1, 6];
const sortedArr = sortArrayDescending(arr);
console.log(sortedArr);  // Output: [9, 6, 5, 3, 1]


 */

/*---qus 6---

function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello")); // Output: "hello"
console.log(lowercaseFirstLetter("JavaScript")); // Output: "javaScript"


 */

/*---qus 7---

function findAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
console.log(findAverage([1, 2, 3, 4, 5])); // Output: 3
console.log(findAverage([10, 20, 30]));   // Output: 20


 */

/*---qus 8---

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

console.log(isLeapYear(2020)); // Output: true (2020 is a leap year)
console.log(isLeapYear(1900)); // Output: false (1900 is not a leap year)


 */

