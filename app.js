
var a=require("readline-sync");
var user=a.question("write your name here");
console.log("WELCOME "+user)
console.log("HELLO "+user+" NOW YOU CAN START") 
console.log("let's see "+ "how much" + user + "know me - ")
 
var a=require("readline-sync");  
var score=0

function test(question,answer){
    var user_answer = a.question(question);
    if (user_answer === answer){
        console.log("correct answer")
        score = score+1;
    }else{
        console.log("wrong answer")
    }
    console.log("current score: ",score);

}

var questions = [{
    question : "what's my name ?",
    answer : "Saijyoti"
},{
    question : "where is my home town ?",
    answer : "Odisha"
},{
    question : "What's my age ?",
    answer : "21"
},{
    question : "what's my favourite colour ?",
    answer : "Green"
},{
    question : "what's my favourite flovour ?",
    answer : "Chocolate"
},{
    question : "what i'm studying now ?",
    answer : "Javascript"
}];

for (var i=0;i<questions.length;i++){
    var currentquestion = questions[i]
    test(currentquestion.question,currentquestion.answer)
}


console.log("i'm from odisha")
var k=0;
console.log(k)
