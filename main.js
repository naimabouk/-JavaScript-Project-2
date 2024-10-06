const sampleString = "hello universe!!!";
const sampleSentence = "hello universe, this is another sentence";
const numberArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function reverseIt(input) {
  const reversedArray = [];
  for (let i = input.length - 1; i >= 0; i--) {
    reversedArray.push(input[i]);
  }
  return `Reversed Output: ${reversedArray.join("")}`;
}

function characterCount(input) {
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    total++;
  }
  return `Character Count: ${total}`;
}

function capitalizeFirstLetters(phrase) {
  const wordsArray = phrase.split(" ");
  const capitalizedArray = wordsArray.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return `Capitalized Phrase: ${capitalizedArray.join(" ")}`;
}

function maximumValue(array) {
  let maxVal = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxVal) {
      maxVal = array[i];
    }
  }
  return `Maximum Value: ${maxVal}`;
}

function minimumValue(array) {
  let minVal = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minVal) {
      minVal = array[i];
    }
  }
  return `Minimum Value: ${minVal}`;
}

function totalArray(array) {
  let totalSum = 0;
  for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
  }
  return `Total of Array: ${totalSum}`;
}

function filterElements(arr, conditionFunc) {
  const filteredResults = [];
  for (let i = 0; i < arr.length; i++) {
    if (conditionFunc(arr[i])) {
      filteredResults.push(arr[i]);
    }
  }
  return `Filtered Elements: ${filteredResults}`;
}

function computeFactorial(num) {
  let factorialResult = 1;
  for (let i = 2; i <= num; i++) {
    factorialResult *= i;
  }
  return `Factorial of ${num} is ${factorialResult}`;
}

function checkPrime(number) {
  let isPrime = true;
  if (number <= 1) isPrime = false;
  if (number <= 3) return `Is ${number} Prime: ${isPrime}`;
  if (number % 2 === 0 || number % 3 === 0) isPrime = false;

  const sqrtNum = Math.sqrt(number);
  for (let i = 5; i <= sqrtNum; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) isPrime = false;
  }

  return `Is ${number} Prime: ${isPrime}`;
}

function generateFibonacci(numTerms) {
  if (numTerms <= 0) return [];
  if (numTerms === 1) return [0];

  const fibSeq = [0, 1];

  for (let i = 2; i < numTerms; i++) {
    const nextValue = fibSeq[i - 1] + fibSeq[i - 2];
    fibSeq.push(nextValue);
  }

  return `Fibonacci Sequence for ${numTerms}: ${fibSeq}`;
}

// Test the Functions
console.log(reverseIt(sampleString));
console.log(characterCount(sampleString));
console.log(capitalizeFirstLetters(sampleSentence));
console.log(maximumValue(numberArray));
console.log(minimumValue(numberArray));
console.log(filterElements(numberArray, (num) => num % 2 === 0));
console.log(totalArray(numberArray));
console.log(computeFactorial(5));
console.log(checkPrime(3));
console.log(generateFibonacci(10));
