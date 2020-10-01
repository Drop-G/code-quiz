var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 60;


var questions = [
  {
      question: "What does HTML stand for?",
      a: "Hyper Text Markup Lingo",
      b: "Hyper Text Makeup Label",
      c: "Hyper Text Markup Language",
      answer: "C"
    },
  {
      question: "What does CSS stand for?",
      a: "Castle Stronghold Sanctuary",
      b: "Cascading Style Sheet",
      c: "Cringy Silent Suburbia",
      answer: "B"
    },
  {
      question: "What is an Example of a symanctic HTML element?",
      a: "div",
      b: "nav",
      c: "img",
      answer: "B"
    },
  {
      question: "What is a CDN",
      a: "Credit Dentist Network",
      b: "Content Delivery Network",
      c: "Crying Dad Nuptual",
      answer: "B"
    },
  {
      question: "Which of these can you use with an image to boost SEO?",
      a: "div",
      b: "nav",
      c: "alt = ",
      answer: "C"
    },
  {
      question: "what command can help find problems in the browswer?",
      a: "console.log()",
      b: "search",
      c: "google",
      answer: "A"
    },
  {
      question: "Whcih symbold is asscociated with JQuery",
      a: "?",
      b: "$",
      c: "%",
      answer: "B"
    },
  {
      question: "which do you use to clone a repository from gitHub",
      a: "git add",
      b: "git commit",
      c: "git clone",
      answer: "C"
    }
  ];

  function get(x){
    return document.getElementById(x);
  }

setTime();

  function startQuiz(){
    test = get("test");
    if(pos >= questions.length){
      test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      get("test_status").innerHTML = "Test completed";
      pos = 0;
      correct = 0;
      return false;
    }

    function setTime() {
      var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "  Seconds until the test is over.";
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          sendMessage();
        }
      }, 1000);
  }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<button onclick='checkAnswer()'type='radio' name='choices' value='A'>"+chA+"</button>";
    test.innerHTML += "<button onclick='checkAnswer()'type='radio' name='choices' value='B'>"+chB+"</button>";
    test.innerHTML += "<button onclick='checkAnswer()'type='radio' name='choices' value='C'>"+chC+"</button>";
  }
  function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    if(choice == questions[pos].answer){
      correct++;
    }
    pos++;
    startQuiz();
  }
  window.addEventListener("load", startQuiz);

  setTime();
  

    

























  