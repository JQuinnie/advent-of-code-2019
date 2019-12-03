// PART 1
// read program in chunks of 4s and capture the number at each position

const _ = require('lodash');

const { puzzleInput } = require('../inputs/day2-puzzle_input');

// const testInput = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];

function programAlarm(intcodes) {
  let int0; let int1; let int2; let
    int3;

  const intcodeClone = _.clone(intcodes);
  for (let i = 0; i < intcodeClone.length; i += 4) {
    // console.log(i);
    int0 = intcodeClone[i];
    int1 = intcodeClone[i + 1];
    int2 = intcodeClone[i + 2];
    int3 = intcodeClone[i + 3];
    // console.log(int0, int1, int2, int3);

    if (int0 === 1) {
      intcodeClone[int3] = intcodeClone[int1] + intcodeClone[int2];
    }
    if (int0 === 2) {
      intcodeClone[int3] = intcodeClone[int1] * intcodeClone[int2];
    }
    if (int0 === 99) {
      return intcodeClone;
    }
  }
}

console.log(programAlarm(puzzleInput));

// PART 2
// loop through values of 0-99 for both noun and verb positions to get result of 19690720

function programTwo(intcodes){
  let noun;
  let verb;

  let intcodeClone = _.clone(intcodes);
  for(let i=0; i<=99; i++){
    for(let j=0; j<=99; j++){
      noun = i;
      verb = j;
      intcodeClone[1] = noun; // change position 1 to noun
      intcodeClone[2] = verb; // change position 2 to verb

      // use function above to get the output at position 0 with noun and verb
      let programArr = programAlarm(intcodeClone);
      if(programArr[0] === 19690720){
        const alarm = 100 * noun + verb;
        return `Alarm: ${alarm} Noun: ${noun} Verb: ${verb}`
      }
      // reset the puzzle input if not correct
      intcodeClone = intcodes;
    }
  }
}

console.log(programTwo(puzzleInput));
