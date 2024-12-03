var question = prompt('Q1. what is the capital of nigeria ? ')
var answer ="abuja"
var score = 0
// alert(question == answer)
if(question.toLowerCase() == answer){
    alert('very correct')
    score = score+1
}else{
    alert('wrong answer')
    score = score-1
}

var questionTwo = prompt('Q2. what is the name of nigeria president ? ')
var answerTwo= "bola ahmed tinubu"
if(questionTwo.toLowerCase() == answerTwo){
    alert('very correct')
    score = score+1
}else{
    alert('wrong answer')
    score = score-1
}

var questionThree= prompt('Q3. what is the name of last month of the year ? ')
var answerThree= "december"
if(questionThree.toLowerCase() == answerThree){
    alert('very correct')
    score = score+1
}else{
    alert('wrong answer')
    score = score-1
}

var questionFour = prompt('Q4. what is the name of governor of ibadan ? ')
var answerFour= "seyi makinde"
if(questionFour.toLowerCase() == answerFour){
    alert('very correct')
    score = score+1
}else{
    alert('wrong answer')
    score = score-1
}

var questionFive = prompt('Q5. what is the capital of lagos ? ')
var answerFive= "ikeja"
if(questionFive.toLowerCase() == answerFive){
    alert('very correct')
    score = score+1
}else{
    alert('wrong answer')
    score = score-1
}

var questionSix = prompt('Q6. What is the best brand of the year ? ')
var answerSix= "nike"
if(questionSix.toLowerCase() == answerSix){
    alert('very correct')
    score = score+1
}else{
    alert('wrong answer')
    score = score-1
}

var questionSeven = prompt('Q7. what is the name of united state president ? ')
var answerSeven= "joe biden"
if(questionSeven.toLowerCase() == answerSeven){
    alert('very correct')
    score = score+1
}else{
    alert('wrong answer')
    score = score-1
}

var questionEight = prompt('Q8. who is the number music artist in nigeria ? ')
var answerEight = "Wizkid"
if(questionEight.toLowerCase() == answerEight){
    alert('very correct')
    score = score+1
}else{
    alert('wrong answer')
    score = score-1
}

var questionNine = prompt('Q9. which phone product use Icloud ? ')
var answerNine = "apple"
if(questionNine.toLowerCase() == answerNine){
    alert('very correct')
    score = score+1
}else{
    alert('wrong answer')
    score = score-1
}

var questionTen = prompt('Q10. which club is called london club')
var answerTen= "chelsea"
if(questionTen.toLowerCase() == answerTen){
    alert('very correct')
    score = score+1
}else{
    alert('wrong answer')
    score = score-1
}

alert('your score is'+ score +' out of 10')

// age calculator

// var userAge = prompt('enter the year you were born ? ')

// var currentYear = 2024
// var ageCalculator = currentYear - userAge

// alert("you are" + ageCalculator + "years old")

// function currentDate(){
// const date = new Date()
// const hour = date.getHours()
// const minute = date.getMinutes()
// const second = date.getSeconds()
// return '${hour}:${minute}:${second}'
// }

// setInterval(currentDate,1)
// console.log(currentDate())