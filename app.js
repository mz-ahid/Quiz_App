var questionData = [
  {
    question: "What is the Full Form Of HTML?",
    options: [
      "HyperText Makeup Language",
      "HyperText Markup Language",
      "HyperText Markup Lame",
      "HyperTate Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "CSS stands for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    question: "PHP stands for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },
  {
    question: "SQL stands for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    question: "When was JavaScript launched?",
    answer: "1995",
    options: ["1996", "1995", "1994", "None of the Above"],
  },
];

var questionToRender = document.getElementById("questionToRender");
var optionsToRender = document.getElementById("optionsToRender");
var count = 0 , score = 0;
var questionNumber = document.getElementById("questionNumber");
var result = document.getElementById("result");
var progressBar = document.getElementById("progressBar");
var progressBarOptions = 100/questionData.length;

function render() {
    progressBar.style.width =`${progressBarOptions*count}%`
    if(count < questionData.length){
        
    
        
questionNumber.innerHTML = count+1;

  questionToRender.innerHTML = questionData[count].question;
    
  optionsToRender.innerHTML = ``
    for(var i = 0; i<questionData[count].options.length; i++){
        optionsToRender.innerHTML += `<div class="col-md-6 col-12 mt-3">
          <button class="btn btn-lg shadow-lg w-100 mt-3" onclick="checkAnswer(${i})">${questionData[count].options[i]}</button>
        </div>`;
    }

}else{

result.innerHTML = 
`
<h1>Result : ${score}/${questionData.length}</h1>
<h1>Percentage : ${(score/questionData.length*100)}</h1>
`

}



}
render();

function nextQuestion(){
    count++ ;
    render();
}


function checkAnswer(i){
if(questionData[count].answer === questionData[count].options[i] ){
    score ++;
}
nextQuestion();


}

var startingMinutes=5;
var time =startingMinutes*60;

var countDown=document.getElementById("countDown");

setInterval(updateCountDown,1000);

function updateCountDown(){
  var minutes=Math.floor(time/60);
  var seconds = time%60;

  seconds =seconds<5?'0'+seconds:seconds;
  countDown.innerHTML=`${minutes}:${seconds}`;
  time--;
}

setTimeout

