// Sum Numbers
function sum (numbers) {
    "use strict";
    let sum = numbers.reduce((acc, el) => acc + el, 0)
    return sum
};