// PART 1
// use reduce on array to sum up fuel requirements

const _ = require('lodash');
const { puzzleInput } = require('../inputs/day1-puzzle_input');
// equation = Math.floor(12 / 3) - 2;

const fuelRequirement = (arr) => {
  return _.reduce(arr, (acc, n) => {
  //   if(n === 0) {
  //     return acc + (Math.floor(n / 3)); // if n started at 0, then offset by 2
  //   }
  //   return acc + (Math.floor(n / 3) - 2);
    return (n !== 0 ? acc + (Math.floor(n / 3) - 2) : acc + (Math.floor(n / 3))); // in ternary form
  }, 0)
}

console.log(fuelRequirement(puzzleInput));

// PART 2
// use recursion to continue to reduce the iteration to 0 fuel, then sum all up

function recursiveReq(num) {
  let iter = Math.floor(num / 3) - 2;
  if(iter <= 0){
    return [0];
  }
  const arr = recursiveReq(iter);
  arr.push(iter);
  return arr;
}

function fuelFuelRequirement(arr) {
  let fuelArr = _.map(arr, n => {
    return _.sum(recursiveReq(n));
  });
  return _.sum(fuelArr);
}

// console.log(recursiveReq(50));
console.log(fuelFuelRequirement(puzzleInput));
