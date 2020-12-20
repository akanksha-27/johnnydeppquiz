var readlineSync = require('readline-sync');
const chalk = require('chalk'); //for interesting colors!

//welcome user
var userName = readlineSync.question(chalk.bgCyan("Enter your name! "));
console.log(chalk.greenBright("Welcome "+userName+"! Get ready to take this awesome quiz on Johnny Depp! =)"));

//starting the game
console.log("                     ");
var start =  readlineSync.question("Press any key to start! ");
console.log("                     ");
var score = 0;

// function for quiz questions & verification of answer
function quizz(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer){
    score = score+ 2;
    console.log(chalk.green("You got that right! ;)"));
    console.log(".................................");

  }else{
    score--;
    console.log(chalk.red("Wrong Answer.. :("));
    console.log(".................................");

  }
};

//quiz questions
var questions=[{
  question: "What is full name of Johnny Depp? ",
  answer: "John Christopher Depp "
},{
  question: "What is Johnny Depp'debut Hollywood film? ",
  answer: "A Nightmare on Elm Street"
},{
  question: "In which year was Johnny Depp named as the highest-paid actor by Guinness World Records? ",
  answer: "2012"
},{
  question: "For which film Johnyy Depp and Tim Burton collaborate for the first time? ",
   answer: "Edward Scissorhands"
},{
  question: "What is the name of Johnny Depp's yacht? ",
  answer: "Vajoliroja"
},{
  question: "Where is the private island owned by Johnny Depp? ",
  answer: "Bahamas"
},{
  question: "Johnny Depp was the part of a band once.What is the name of the band? ",
  answer: "The Kids"
},{
  question: "Johnny Depp has claimed that he is from__Native American Communities? ",
  answer: "Cherokee"
},{
  question: "Johnny Depp dropped out of high school to pursue__? ",
  answer: "Music"
},{
  question: "Oscars Johnny Depp has? ",
  answer: "One"
}];

//keeping track of questions
for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  quizz(chalk.cyanBright(currentQuestion.question), currentQuestion.answer);
};

//printing highscore
if (score>5){
  console.log(chalk.bgGreen(" 😃! Your score is "+score));
}else{
  console.log(chalk.bgRed("😞, your score is "+score));
}