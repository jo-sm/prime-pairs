const { strict: assert } = require('assert');

/**
 * Returns if a given integer is prime by iterating until either the integer is cleanly divisible
 * by an integer lower than itself, or it would be divided by one.
 *
 * Returns false if the given integer is equal to or less than 1.
 * @param  {Number}  integer
 * @param  {Number}  i
 * @return {Boolean}   If the integer is prime
 */
function isPrime(integer, i = integer-1) {
  if (i === 1) {
    return true;
  } else if (i <= 0) {
    return false;
  } else if (Number.isInteger(integer / i)) {
    return false;
  } else {
    return isPrime(integer, i-1);
  }
}

/**
 * Destructively takes a random item from the array.
 *
 * @param  {any[]} arr
 * @return {any}
 */
function takeRandomItem(arr) {
  const pos = Math.floor(Math.random() * arr.length);

  return arr.splice(pos, 1)[0];
}

/**
 * Generates an array of integers such that each integer "pair" summed is a prime number.
 *
 * E.g. Given [1,2,3,4], a possible result would be [1,4,3,2] as 1+4, 4+3, and 3+2 are all prime.
 * @param  {Number[]} integers
 * @return {Number[]}
 */
function generatePrimePairsFromNumbers(integers) {
  const remaining = Array.from(integers);
  const result = [];
  let currentIterCount = 0;

  // Populate the result array with a random number from the `numbers` array
  result.push(takeRandomItem(remaining));

  while (remaining.length > 0) {
    const curr = takeRandomItem(remaining);

    if (isPrime(result[0] + curr)) {
      // If the result is prime, reset the current iteration count and add the number to the front of the result
      result.unshift(curr);
      currentIterCount = 0;
    } else if (currentIterCount === remaining.length + 1) {
      // If the number of iterations equals the remaining numbers, we've gone through the entire list without
      // finding a match. Remove the last item from the result and add it back to the `remaining` array, and start
      // a new iteration
      const removed = result.pop();

      remaining.unshift(curr);
      remaining.unshift(removed);
      currentIterCount = 0;
    } else {
      remaining.unshift(curr);
      currentIterCount++;
    }
  }

  return result;
}

const primePairs = generatePrimePairsFromNumbers([1,2,3,4,5,6,7,8,9]);

console.log(`Generated prime pair list: [${primePairs.join(', ')}]`)

primePairs.forEach((_, i) => {
  if (i === primePairs.length - 1) {
    return
  }

  process.stdout.write(`${primePairs[i]} + ${primePairs[i+1]} prime? `);

  try {
    assert(isPrime(primePairs[i] + primePairs[i+1]));
    console.log('yes');
  } catch(e) {
    console.log('no');
    throw e;
  }
})

