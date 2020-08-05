"use strict";
const greet = require("./greet");
const chalk = require('chalk');
var figlet = require('figlet');

console.log(greet("Xola"));
console.log(chalk.blue('Hello world!'));




figlet(greet('Xola'), function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    const styledMessage = chalk.bgGreen.black(data);
    console.log(styledMessage)

});