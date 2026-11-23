//:breakpoint: which we maually add where we want to stop the programmme
//breakpoint

function findMax(numbers) {

  let max = -Infinity;

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > max) {

      max = numbers[i];

    }

  }

  return max;

}

const values = [5, 10, 3, 8, 15];

console.log("maximum value:", findMax(values)); //15
