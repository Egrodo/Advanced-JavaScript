// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same.
  // otherwise return false.
  const obs = [obj]; // Set 'obs' to equal a 2d array of the object.
  let check;
  let flag = true;
  const helper = (o) => {
    const vals = Object.values(o);
    for (let i = 0; i < vals.length; i++) { // Loop through values in object to check if they're all the same.
      if (typeof vals[i] !== 'object' && !check) check = vals[i]; // Set check equal to the first value in the object.
      if (typeof vals[i] !== 'object' && check !== vals[i]) return flag = false; // If the current value is not an object AND check is not the same as the current value, return 'flag' as false.
      if (typeof vals[i] === 'object') obs.push(vals[i]); // If the current value IS an object, add the current value to the 'obs' object.
    }
  };
  for (let i = 0; i < obs.length; i++) { // Loop through the 'obs' array.
    helper(obs[i]); // For each value in the 'obs' array pass it to the helper function.
  }
  return flag; // Return the state of flag, which will only be false if specifically set false.
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
