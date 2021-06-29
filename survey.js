const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const completedProfile = function (answer) {

}

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {

              console.log(`My name is ${answer}. I enjoy ${answer2}, and whilst I am ${answer2}, I listen to ${answer3}. My favourite thing to eat for ${answer4} is ${answer5}. My absolute favourite sport is ${answer6}. My superpower is ${answer7}, because I am amazing at that!`)

              rl.close();

            })
          })
        })
      })  
    })
  })
});



// What's your name? Nicknames are also acceptable :) 
// What's an activity you like doing? 
// What do you listen to while doing that? 
// Which meal is your favourite (eg: dinner, brunch, etc.) 
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite? 
// What is your superpower? In a few words, tell us what you are amazing at!
