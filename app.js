#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
(async () => {
    await showBanner("Guessing Game", "=================================================== by @SyedaIqraGillani", "green");
})();
async function guessingNumber() {
    let score = 0;
    let randomNumber, answer;
    do {
        randomNumber = Math.round(Math.random() * 1);
        answer = await inquirer.prompt([{
                name: "userNumber",
                type: "number",
                message: "Enter any number from 0-1:"
            }]);
        if (answer.userNumber === randomNumber) {
            score += 10;
            console.log(chalk.green("CONGRATS! You guessed the right number"));
            console.log(chalk.green("Total Score: " + score));
            console.log(chalk.blue("= = = = = ="));
        }
        else {
            console.log(chalk.red("SORRY! You guessed the wrong number"));
            console.log(chalk.red("Correct number was " + randomNumber));
            console.log(chalk.red("Total Score: " + score));
            console.log(chalk.blue("= = = = = ="));
        }
    } while (answer.userNumber === randomNumber);
}
setTimeout(() => {
    guessingNumber();
}, 200);
