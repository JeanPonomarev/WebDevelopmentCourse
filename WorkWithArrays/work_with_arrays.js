(function () {
    function sortArrayDescending(array) {
        array.sort(function (el1, el2) {
            return el2 - el1;
        });
    }

    function getSubArray(array, count, fromStart) {
        if (fromStart) {
            return array.slice(0, count);
        }

        return array.slice(array.length - count);
    }

    function getEvenNumbersSum(array) {
        return array
            .filter(function (element) {
                return element % 2 === 0;
            })
            .reduce(function (total, element) {
                return total + element;
            }, 0);
    }

    function getSquaredEvenNumbersArray(array) {
        return array
            .filter(function (element) {
                return element % 2 === 0;
            })
            .map(function (element) {
                return element * element;
            });
    }

    var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    sortArrayDescending(numbersArray);
    console.log("Array sorted in descending order: ");
    console.log(numbersArray);
    console.log();

    console.log("First 5 elements of array:")
    console.log(getSubArray(numbersArray, 5, true));
    console.log();

    console.log("Last 5 elements of array:")
    console.log(getSubArray(numbersArray, 5, false));
    console.log();

    console.log("Sum of even numbers from array: " + getEvenNumbersSum(numbersArray));
    console.log();

    var largeNumbersArray = [];

    for (var i = 1; i <= 100; i++) {
        largeNumbersArray.push(i);
    }

    console.log("Large array from 1 to 100:")
    console.log(largeNumbersArray);
    console.log();

    console.log("Squares of even numbers from large array:")
    console.log(getSquaredEvenNumbersArray(largeNumbersArray));
})();