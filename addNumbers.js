const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const addNumbers = function(sum, numsLeft, completionCallback){


  rl.question("Please enter a number: ", function(answer){
    answer = parseInt(answer);
    completionCallback(answer, sum, numsLeft);

  });

}

const completionCallback = function(answer, sum, numsLeft) {
  sum += answer;
  numsLeft -= 1;
  console.log(`You have ${numsLeft} numsleft.`);
  console.log(sum);
  if (numsLeft === 0){
    rl.close();
    return sum;
  }

  addNumbers(sum, numsLeft, completionCallback);

};

addNumbers(0, 4, completionCallback);
