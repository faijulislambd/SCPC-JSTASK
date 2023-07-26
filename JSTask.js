// 1. Reverse text without using reverse() function
const reverseText = (text) => {
  let reverse = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reverse += text[i];
  }
  console.log(`1) Reverse Text: '${text}' to '${reverse}'`);
};

// 2. Function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
const positiveNumberSum = (numberArray) => {
  let positiveSum = 0;
  for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] >= 0) {
      positiveSum = positiveSum + numberArray[i];
    }
  }
  console.log(
    `2) Summation of the positive number [${numberArray}] = ${positiveSum}`
  );
};

// 3. Function to find the most frequent element in an array and return it.
const frequentlyRepeated = (numberArray) => {
  const perNumberRepeatCount = {};
  for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i];
    if (perNumberRepeatCount[number]) {
      perNumberRepeatCount[number]++;
    } else {
      perNumberRepeatCount[number] = 1;
    }
  }

  let mostFrequentNumber;
  let highestFrequency = 0;

  for (const key in perNumberRepeatCount) {
    if (perNumberRepeatCount[key] > highestFrequency) {
      highestFrequency = perNumberRepeatCount[key];
      mostFrequentNumber = key;
    }
  }
  console.log(
    `3) The most frequent element in the array [${numberArray}] is "${mostFrequentNumber}"`
  );
};

// 4. Function to find two numbers in a sorted array that add up to a target value, you can use a two-pointer approach. This approach takes advantage of the fact that the array is sorted and efficiently finds the pair of numbers that adds up to the target value.
const pairOfTargetValue = (sortedArray, targetValue) => {
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      const sum = sortedArray[i] + sortedArray[j];
      if (sum === targetValue) {
        console.log(
          `4) The pair that generates the target value is [${i},${j}], "${sortedArray[i]}+ ${sortedArray[j]} = ${targetValue}"`
        );
      }
    }
  }
};

// 5. Function take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const calculateNumber = (number1, number2, operator) => {
  switch (operator) {
    case "+":
      console.log(`5) ${number1} + ${number2} = ${number1 + number2}`);
      break;
    case "-":
      console.log(`5) ${number1} - ${number2} = ${number1 - number2}`);
      break;
    case "*":
      console.log(`5) ${number1} * ${number2} = ${number1 * number2}`);
      break;
    case "/":
      console.log(`5) ${number1} / ${number2} = ${number1 / number2}`);
      break;
    default:
      console.log("5) Invalid operator");
      break;
  }
};

// 6. Function  that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const passwordGenerate = (length) => {
  const allCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:',.<>?";

  let generatedPassword = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    generatedPassword += allCharacters.charAt(randomIndex);
  }

  console.log(`6) Password: ${generatedPassword}`);
};

// 7. Function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
const romanToInteger = (romanNumeral) => {
  romanNumeral = romanNumeral.toUpperCase();
  const defaultRomanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentSymbol = romanNumeral[i];
    const currentValue = defaultRomanNumerals[currentSymbol];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  console.log(`7) The integer value of "${romanNumeral}" is "${result}"`);
};

// 8. Function to find the second smallest number
const findSecondSmallest = (array) => {
  if (array.length < 2) {
    console.log("Array should have at least two elements");
  }

  let smallest = array[0];
  let secondSmallest = array[1];

  // Make sure smallest and secondSmallest are in the correct order
  if (smallest > secondSmallest) {
    [smallest, secondSmallest] = [secondSmallest, smallest];
  }

  for (let i = 2; i < array.length; i++) {
    if (array[i] < smallest) {
      secondSmallest = smallest;
      smallest = array[i];
    } else if (array[i] < secondSmallest && array[i] !== smallest) {
      secondSmallest = array[i];
    }
  }

  if (secondSmallest === smallest || secondSmallest === array[1]) {
    console.log("8) There is no second smallest element in the array");
  }

  console.log(
    `8) The second smallest number of the array [${array}] is ${secondSmallest}`
  );
};

reverseText("hello world");
positiveNumberSum([2, -5, 10, -3, 7]);
frequentlyRepeated([3, 4, 4, 5, 4, 3, 1, 4, 5]);
pairOfTargetValue([1, 3, 6, 8, 11, 15], 9);
calculateNumber(2, 9, "/");
passwordGenerate(10);
romanToInteger("xI");
findSecondSmallest([12, 4, 2, 7, 8, 3]);
