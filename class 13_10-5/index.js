const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
(async () => {
// create variable userGuess: number = null
let userGuess;
// create variable randomNumber: number = some random number
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)
// create variable gameStillGoing: boolean = true
let gameStillGoing = true;

// output instruction to user
console.log('Guess a number between 1-100')

// WHILE LOOP (gameIsStillGoing)
while (gameStillGoing) {
    //     prompt for input, store it in userGuess
    userGuess = await questionAsync('')
         
       
    //     branch IF (compare userGuess to randomNumber is true)
    if(userGuess == randomNumber){
        //         output you won
        console.log(' you won !!!!!!!')
        gameStillGoing = false

        //         ELSE (false)
    } else {

        //             if (userGuess > randomNunber    
        console.log(userGuess)
        console.log(parseInt(userGuess))
        console.log(randomNumber)
        if(parseInt(userGuess) > randomNumber) {
            //                 output guess was too high, try again lower
            console.log('guess was too high, try again lower')
            //             else (user guess < randomNumber)
        } else {
            //                 output guess was too low, try again higher
            console.log('guess was too low, try again higher')
        }
    }    
    
    // loop end
}

})();  

 
function questionAsync(question) {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
  
      rl.question(question, (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }