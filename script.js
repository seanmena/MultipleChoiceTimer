// for (let i = 0; i < answersOne.length; i++) {
    //     let answerBox1 = document.createElement("BUTTON");
    //     answerBox1.textContent = answersOne[i];
    //     answerBox1.classList.add("btn");
    //     answerBox1.classList.add("btn-primary");
    //     answerBox1.classList.add("btn-lg");
    //     document.body.appendChild(answerBox1);
    // } // NOT WHAT I NEED     
// Question one: Which variable declaration cannot be changed
// question One Variables
let answersOne = ["Var", "Const", "Let"]
// Question two: Which one is a good tool for Debugging
// qustion two variables
let answersTwo = ["Console.log()", "for loop", "script.js"]
// Question Three: "Which is used to desribe the length of an array"
// question three variables
let answersThree = [".getelementbyid", ".style", ".length"]


// on click create h1 with question and buttons.
// on click button start q2
// on click button start q3

// startNow = document.getElementById("startBtn");
const startBtn = document.getElementById("start-btn");
frontPage = document.getElementsByClassName("jumbotron");


startBtn.addEventListener("click", gameStart);

function gameStart(){

    score = 0;

    correctOne = false;
    correcttwo = false;
    correctthree = false;

    $(frontPage).hide();

    // all questions:
    const questionOne = document.createElement("h1");
    questionOne.textContent = "Which Variable declaration cannot be changed?";
    document.body.appendChild(questionOne);

    const questionTwo = document.createElement("h1");
    questionTwo.textContent = "Which tool is best used for debugging?";
    document.body.appendChild(questionTwo);
    $(questionTwo).hide();


    const questionThree = document.createElement("h1");
    questionThree.textContent = "What is used to describe how many piees are in an array?";
    document.body.appendChild(questionThree);
    $(questionThree).hide();

    
        //All answers:
        let oneAnswer1 = document.createElement("button");
        oneAnswer1.textContent = "Var"
        oneAnswer1.classList.add("btn");
        oneAnswer1.classList.add("btn-primary");
        oneAnswer1.classList.add("btn-lg");
        document.body.appendChild(oneAnswer1);
        
        let oneAnswer2 = document.createElement("button");
        oneAnswer2.textContent = "Const"
        oneAnswer2.classList.add("btn");
        oneAnswer2.classList.add("btn-primary");
        oneAnswer2.classList.add("btn-lg");
        document.body.appendChild(oneAnswer2);
        
        let oneAnswer3 = document.createElement("button");
        oneAnswer3.textContent = "let"
        oneAnswer3.classList.add("btn");
        oneAnswer3.classList.add("btn-primary");
        oneAnswer3.classList.add("btn-lg");
        document.body.appendChild(oneAnswer3);
        
        let twoAnswer1 = document.createElement("button");
        twoAnswer1.textContent = "Console.log"
        twoAnswer1.classList.add("btn");
        twoAnswer1.classList.add("btn-primary");
        twoAnswer1.classList.add("btn-lg");
        document.body.appendChild(twoAnswer1);
        
        let twoAnswer2 = document.createElement("button");
        twoAnswer2.textContent = "For loop"
        twoAnswer2.classList.add("btn");
        twoAnswer2.classList.add("btn-primary");
        twoAnswer2.classList.add("btn-lg");
        document.body.appendChild(twoAnswer2);
        
        let twoAnswer3 = document.createElement("button");
        twoAnswer3.textContent = "script.js"
        twoAnswer3.classList.add("btn");
        twoAnswer3.classList.add("btn-primary");
        twoAnswer3.classList.add("btn-lg");
        document.body.appendChild(twoAnswer3);

        let threeAnswer1 = document.createElement("button");
        threeAnswer1.textContent = ".getelementbyid"
        threeAnswer1.classList.add("btn");
        threeAnswer1.classList.add("btn-primary");
        threeAnswer1.classList.add("btn-lg");
        document.body.appendChild(threeAnswer1);
        
        let threeAnswer2 = document.createElement("button");
        threeAnswer2.textContent = ".style"
        threeAnswer2.classList.add("btn");
        threeAnswer2.classList.add("btn-primary");
        threeAnswer2.classList.add("btn-lg");
        document.body.appendChild(threeAnswer2);
        
        let threeAnswer3 = document.createElement("button");
        threeAnswer3.textContent = ".length"
        threeAnswer3.classList.add("btn");
        threeAnswer3.classList.add("btn-primary");
        threeAnswer3.classList.add("btn-lg");
        document.body.appendChild(threeAnswer3);

        $(twoAnswer1).hide();
        $(twoAnswer2).hide();
        $(twoAnswer3).hide();

        $(threeAnswer1).hide();
        $(threeAnswer2).hide();
        $(threeAnswer3).hide();

        
        oneAnswer1.addEventListener("click", questionOneWrong);
        oneAnswer2.addEventListener("click", questionOneRight);
        oneAnswer3.addEventListener("click", questionOneWrong);
        
        twoAnswer1.addEventListener("click", questiontwoRight);
        twoAnswer2.addEventListener("click", questiontwoWrong);
        twoAnswer3.addEventListener("click", questiontwoWrong);

        threeAnswer1.addEventListener("click", questionthreeWrong);
        threeAnswer2.addEventListener("click", questionthreeWrong);
        threeAnswer3.addEventListener("click", questionthreeRight);
        
        function questionOneWrong(){
            correctOne = false;
            alert ("Incorrect!");
            $(questionOne).hide();
            $(oneAnswer1).hide();
            $(oneAnswer2).hide();
            $(oneAnswer3).hide();
            $(questionTwo).show();
            $(twoAnswer1).show();
            $(twoAnswer2).show();
            $(twoAnswer3).show();
            
        }
        
        function questionOneRight(){
            correctOne = true;
            alert ("Correct!");
            $(questionOne).hide();
            $(oneAnswer1).hide();
            $(oneAnswer2).hide();
            $(oneAnswer3).hide();
            $(questionTwo).show();
            $(twoAnswer1).show();
            $(twoAnswer2).show();
            $(twoAnswer3).show();
        }

        function questiontwoWrong(){
            correcttwo = false;
            alert ("Incorrect!");
            $(questionTwo).hide();
            $(twoAnswer1).hide();
            $(twoAnswer2).hide();
            $(twoAnswer3).hide();
            $(questionThree).show();
            $(threeAnswer1).show();
            $(threeAnswer2).show();
            $(threeAnswer3).show();
            
        }
        
        function questiontwoRight(){
            correcttwo = true;
            alert ("Correct!");
            $(questionTwo).hide();
            $(twoAnswer1).hide();
            $(twoAnswer2).hide();
            $(twoAnswer3).hide();
            $(questionThree).show();
            $(threeAnswer1).show();
            $(threeAnswer2).show();
            $(threeAnswer3).show();
        }

        function questionthreeWrong(){
            correctthree = false;
            alert ("Incorrect!");
            $(questionThree).hide();
            $(threeAnswer1).hide();
            $(threeAnswer2).hide();
            $(threeAnswer3).hide();
            endResults();
        }
        
        function questionthreeRight(){
            correctthree = true;
            alert ("Correct!");
            $(questionThree).hide();
            $(threeAnswer1).hide();
            $(threeAnswer2).hide();
            $(threeAnswer3).hide();
            endResults();
        }


        
        function endResults() {
            if(correctOne === true && correcttwo === true && correctthree === false) {
               score = 2;
            }
    
            if(correctOne === false && correcttwo === true && correctthree === true); {
                score = 2;
            }
    
            if (correctOne === true && correcttwo === false && correctthree === true); {
                score = 2;

            }

            if(correctOne === true && correcttwo === false && correctthree === false) {
                score = 1;
             }

            if(correctOne === false && correcttwo === true && correctthree === false) {
                score = 1;
            }

            if(correctOne === false && correcttwo === false && correctthree === true) {
                score = 1;
            }

            if(correctOne === true && correcttwo === true && correctthree === true) {
                score = 3;
            }
            
            if(correctOne === false && correcttwo === false && correctthree === false){
                score = 0;
            }
              
            console.log(score)

            showScore = document.createElement("h3");
            showScore.textContent = "Score:  " + score;
            document.body.appendChild(showScore);

        }




    }
    
    
    