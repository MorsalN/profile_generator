/*

Profile Generator
Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.

A Solution
To help out our fellow users, let's create a quick survey app which asks the user a bunch of questions like their favourite music, activity, food, sport, etc. It will then generate a profile description for them to use online, like the example demonstrated above.

*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let profile = '';

rl.question('What\'s your name? Nicknames are also acceptable :)   ', (answer1) => {
  let profile = `${answer1}`;
  // console.log(`Thank you for your valuable feedback: ${answer1}`);

  rl.question('What\'s an activity you like doing?    ', (answer2) => {
    profile += `'s favourite activity to do is ${answer2}. `;
    console.log(profile);

    rl.question('What do you listen to while doing that?    ', (answer3) => {
      profile += `The music listened to is ${answer3}. `;
      console.log(profile);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?    ', (answer4) => {
        profile += `${answer1}'s favourite meal of the day is ${answer4}. `;
        console.log(profile);

        rl.question('What is your superpower? In a few words, tell us what you are amazing at!    ', (answer5) => {
          profile += `A superpower of theirs is ${answer5}. `;
          console.log(profile);
          rl.close();
        })
      })
    })
  })   
});
