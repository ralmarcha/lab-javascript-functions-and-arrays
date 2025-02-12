// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 === num2) {
    return num1;
  } else if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(`ITERATION 1. The maximum is:`);
console.log(maxOfTwoNumbers(4, 5));

// Iteration #2: Find longest word

const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(wordArray) {
  let finalWord;
  let maxLength = 0;

  if (wordArray == 0) return null;
  for (let word = 0; word < wordArray.length; word++) {
    if (wordArray[word].length > maxLength) {
      maxLength = wordArray[word].length;
      finalWord = wordArray[word];
    }
  }
  return finalWord;
}
console.log(`ITERATION 2. The longest word is:`);
console.log(findLongestWord(words));

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(arrayNumbers) {
  let sumCalc = 0;
  if (arrayNumbers == 0) return 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    sumCalc += arrayNumbers[i];
  }
  return sumCalc;
}
console.log("ITERATION 3.1. The sum is: ");
console.log(sumNumbers(numbers));

// Iteration #3.2 Bonus:

const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

function sum(mixed) {
  let sumMix = 0;
  for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] === "string") {
      sumMix += mixed[i].length;
    } else if (mixed[i] === true) {
      sumMix += 1;
    } else {
      sumMix += mixed[i];
    }
  }
  return sumMix;
}
console.log("ITERATION 3.2 BONUS. The sum is:");
console.log(sum(mixedArr));

// Iteration #4: Calculate the average
// Level 1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(array) {
  let sumCalc2 = 0;
  if (array == 0) return null;
  for (let i = 0; i < array.length; i++) {
    sumCalc2 += array[i];
  }
  return sumCalc2 / array.length;
}
console.log("ITERATION 4.1. The average is:");
console.log(averageNumbers(numbersAvg));

// Level 2: Array of strings

const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(wordsArr) {
  let total = 0;
  let i = 0;
  if (wordsArr.length === 0) return null;
  for (let i = 0; i < wordsArr.length; i++) {
    total += wordsArr[i].length;
  }
  return total / wordsArr.length;
}
console.log("ITERATION 4.2. The average is:");
console.log(averageWordLength(wordsArr));

// Bonus - Iteration #4.1

const mixedArr2 = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];
function avg(array) {
  if (array == 0) return null;
  return sum(array) / array.length;
}
console.log("ITERATION 4.3 BONUS. The average is:");
console.log(avg(mixedArr2));

// Iteration #5: Unique arrays

const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(wordsUnique) {
  let wordsRemoved = [];
  if (wordsUnique == 0) return null;
  for (let i = 0; i < wordsUnique.length; i++) {
    if (!wordsRemoved.includes(wordsUnique[i])) {
      wordsRemoved.push(wordsUnique[i]);
    }
  }
  return wordsRemoved;
}
console.log("ITERATION 5. The unique array is:");
console.log(uniquifyArray(wordsUnique));

// resultado clase
// function uniquifyArray2(array) {
//   let wordsRemoved2 = array.filter((word, index) => {
//     return array.indexOf(word) === index;
//   });
//   return wordsRemoved2;
// }
// console.log(uniquifyArray2(wordsUnique));

// Iteration #6: Find elements

const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordsFind, wordSearch) {
  if (wordsFind == 0) return null;
  if (wordsFind.includes(wordSearch)) {
    return true;
  } else {
    return false;
  }
}
console.log("ITERATION 6. Finding word:");
console.log(doesWordExist(wordsFind, "matter"));

// Iteration #7: Count repetition

const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(wordsCount, wordToCount) {
  if (wordsCount == 0) return 0;
  let countTimes = 0;
  for (let i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] == wordToCount) {
      countTimes++;
    }
  }
  return countTimes;
}
console.log("ITERATION 7. Count repetition:");
console.log(howManyTimes(wordsCount, "matter"));

// Iteration #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(array) {
  let product = 0;
  let maxProd = 0;

  //rows
  for (let i = 0; i < array.length; i++) {
    //columnas
    for (let j = 0; j < array.length; j++) {
      //horizontasl
      if (j - 3 >= 0) {
        product =
          array[i][j] * array[i][j - 1] * array[i][j - 2] * array[i][j - 3];
        if (product > maxProd) maxProd = product;
      }
      //vertical
      if (i - 3 >= 0) {
        product =
          array[i][j] * array[i - 1][j] * array[i - 2][j] * array[i - 3][j];
        if (product > maxProd) maxProd = product;
      }
    }
  }
  return maxProd;
}
console.log("ITERATION 8 BONUS. Adjacent numbers:");
console.log(greatestProduct(matrix));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
  };
}
