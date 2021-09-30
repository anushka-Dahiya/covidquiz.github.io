const quiz=[

{
  question:" Q1:How is COVID-19 passed on?",
  a:"Through droplets that come from your mouth and nose when you cough or breathe out",
  b:"In sexual fluids, including semen, vaginal fluids or anal mucous",
  c:"By drinking unclean water",
  d:"All of the above",
  ans:"ans1"

},
{
  question:"Q2:What are the common symptoms of COVID-19?  ",
  a:"A new and continuous cough ",
  b:"Fever",
  c:"Tiredness ",
  d:"All of the above",
  ans:"ans4"
},
{
  question:"Q3:The “corona” in coronavirus means:",
  a:"Sun",
  b:"Beer ",
  c:"Strong ",
  d:"Crown",
  ans:"ans4"
},
{
  question:"Q4:An effective hand sanitizer contains at least this percentage of alcohol to kill the coronavirus and other germs:",
  a:"30%",
  b:"45%",
  c:"60%",
  d:"80%",
  ans:"ans3"
},
{
  question:"Q5:When is it safe to be closer than 6 feet to another person who is not sick with COVID-19?",
a:"When the person is related to you ",
b:"When you have already had COVID-19 ",
c:"When you are outoors",
d:"When the person normally lives with you",
ans:"ans4"

}





];




const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer')
const showscore=document.querySelector('#showscore');

let questionCount=0;
let score=0;
const loadques= () => {
  const questionList=quiz[questionCount];
  question.innerText=questionList.question;
  option1.innerText=questionList.a;
  option2.innerText=questionList.b;
  option3.innerText=questionList.c;
  option4.innerText=questionList.d;
}
loadques();

const getCheckAns=()=>{
  let answer;
  answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
      answer=curAnsElem.id;

    }

  });
return answer;
};

const deselectAll= () =>{
   answers.forEach((curAnsElem) =>  curAnsElem.checked=false);
}

submit.addEventListener('click', () => {
  const checkedAns=getCheckAns();
  console.log(checkedAns);
  if(checkedAns==quiz[questionCount].ans){
    score++;
  };

  questionCount++;
  deselectAll();
  if(questionCount<quiz.length){
    loadques();
  }else {
     showscore.innerHTML=`
     <h3>You scored ${score}/${quiz.length} </h3>
     <button class="bn" onclick="location.reload()">Play Again</button>
     `;

      showscore.classList.remove('scorearea');
  }



});
