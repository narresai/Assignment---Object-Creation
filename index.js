/* Without object */
let title = 'Where is the capital of Jamaica';
let options =  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'];
let correctAnswerIndex = 1;
function isAnswerCorrect(index){
    return index === correctAnswerIndex;
}
function getCorrectAnswer(){
    return options[correctAnswerIndex];
}

/*Organize using object*/
let question = {
title :'Where is the capital of Jamaica',
options : ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
correctAnswerIndex : 1,
isAnswerCorrect(index){
    return index === question.correctAnswerIndex;
},
getCorrectAnswer(){
    return question.options[question.correctAnswerIndex];
}
}

let question2 = {
    title :'Where is the capital of Jamaica',
    options : ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    correctAnswerIndex : 1,
    isAnswerCorrect(index){
        return index === question2.correctAnswerIndex;
    },
    getCorrectAnswer(){
        return question2.options[question2.correctAnswerIndex];
    }
    }


 /*Use a function to create object*/
 function createQuestion(title,options,correctAnswerIndex){
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex,
    question.isAnswerCorrect = function(index){
        return index === question.correctAnswerIndex;
    };
    question.getCorrectAnswer = function(){
        return question.options[question.correctAnswerIndex];
    };
    return question;
 }

 const firstQuestion = createQuestion('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],correctAnswerIndex= 1)
 const secondQuestion = createQuestion('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],correctAnswerIndex= 2)

/*Convert the function to use this keyword*/
function createQuestion(title,options,correctAnswerIndex){
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex,
    question.isAnswerCorrect = function(index){
        return index === this.correctAnswerIndex;
    };
    question.getCorrectAnswer = function(){
        return this.options[this.correctAnswerIndex];
    };
    return question;
 }