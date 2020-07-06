(function () {
    var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    sortArrayDescending(numberArray);
    console.log("Array sorted in descending order: ");
    console.log(numberArray);
    console.log();

    console.log("First 5 elements of array:")
    console.log(getSubarray(numberArray, 5, true));
    console.log();

    console.log("Last 5 elements of array:")
    console.log(getSubarray(numberArray, 5, false));
    console.log();

    console.log("Sum of even numbers from array: " + getEvenNumbersSum(numberArray));
    console.log();

    var largeNumberArray = [];

    for (var i = 1; i <= 100; i++) {
        largeNumberArray.push(i);
    }

    console.log("Large array from 1 to 100:")
    console.log(largeNumberArray);
    console.log();

    console.log("Squares of even numbers from large array:")
    console.log(getSquaredEvenNumbersArray(largeNumberArray));

    function sortArrayDescending(array) {
        array.sort(function (el1, el2) {
            return el2 - el1;
        });
    }

    function getSubarray(array, count, fromStart) {
        if (fromStart) {
            return array.slice(0, count);
        }

        return array.slice(array.length - count);
    }

    function getEvenNumbersSum(array) {
        var sum = 0;

        array.forEach(function (item) {
            if (item % 2 === 0) {
                sum += item;
            }
        });

        return sum;
    }

    function getSquaredEvenNumbersArray(array) {
        var proceededArray = [];

        array.reduce(function (total, currentValue) {
            if (currentValue % 2 === 0) {
                proceededArray.push(currentValue * currentValue);
            }
        });

        return proceededArray;
    }
})();