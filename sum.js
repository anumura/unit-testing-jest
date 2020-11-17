const { ConsoleWriter } = require("istanbul-lib-report");

function sum(a,b){
    return a+b;
}

function coverage(){
    Console.log("I am from COnsole");
}
module.exports = sum