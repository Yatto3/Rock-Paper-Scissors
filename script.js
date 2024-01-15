"use strict";



const buttonsContainer = document.querySelector(".game-buttons");
const userScoreElem = document.querySelector("[data-userScore]");
const compScoreElem = document.querySelector("[data-compScore]");
const h1 = document.querySelector("[data-header]");

let isUserTurn = true ; 
let sequence = ["Fist", "Paper", "Scissors"];
let imgSrc = [
    "./public/img/fist-svgrepo-com.svg",
    "./public/img/palm-svgrepo-com.svg",
    "./public/img/scissors.png"
]

let userScore = 0;
let compScore = 0;

if(buttonsContainer){
    buttonsContainer.addEventListener("click" , (e) => {
        if(e.target.tagName === "IMG"){
            if (isUserTurn){
                let userInput = e.target.getAttribute("alt");
                userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1,userInput.length);
                startGame(userInput);
            }
            return ;
        }
    })
}

function startGame(userInput){
    let compInput = getCompInput();
    checkForWin(userInput,compInput);
}


function getCompInput(){

    return sequence[Math.floor(Math.random() * sequence.length)];
}

function checkForWin(userInput,compInput){
    switch(userInput){
        case "Fist" :
            switch(compInput){
                case "Scissors":
                    win(userInput,compInput);
                    break;

                case "Fist":
                    draw(userInput,compInput);
                    break;
                case "Paper":
                    lose(userInput,compInput);
                    break;
            }
            break;

        case "Paper" :
            switch(compInput){
                case "Scissors":
                    lose(userInput,compInput);
                    break;

                case "Fist":
                    win(userInput,compInput);
                    break;
                case "Paper":
                    draw(userInput,compInput);
                    break;
            }
            break;

        case "Scissors" :
            switch(compInput){
                case "Scissors":
                    draw(userInput,compInput);
                    break;

                case "Fist":
                    lose(userInput,compInput);
                    break;
                case "Paper":
                    win(userInput,compInput);
                    break;
            }
            break;
        
    }
}

function draw(userInput,compInput){
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let p1 = document.createElement("p");
   

    span1.classList.toggle("forSpan");
    span1.innerHTML = "user";

    span2.classList.toggle("forSpan");
    span2.innerHTML = "comp";
  
    h1.innerHTML = "";
    p1.innerHTML = `${userInput}`;
    p1.append(span1);
    p1.innerHTML += ` equal ${compInput}`;
    p1.append(span2);
    p1.innerHTML += " . It's a draw. "

    h1.append(p1);

    updateScore("both");
   
}

function win(userInput,compInput){
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let p1 = document.createElement("p");
   

    span1.classList.toggle("forSpan");
    span1.innerHTML = "user";

    span2.classList.toggle("forSpan");
    span2.innerHTML = "comp";
  
    h1.innerHTML = "";
    p1.innerHTML = `${userInput}`;
    p1.append(span1);
    p1.innerHTML += ` beats ${compInput}`;
    p1.append(span2);
    p1.innerHTML += " . It's a win. "

    h1.append(p1);

    updateScore("user");
   
}

function lose(userInput,compInput){
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let p1 = document.createElement("p");
   

    span1.classList.toggle("forSpan");
    span1.innerHTML = "user";

    span2.classList.toggle("forSpan");
    span2.innerHTML = "comp";
  
    h1.innerHTML = "";
    p1.innerHTML = `${userInput}`;
    p1.append(span1);
    p1.innerHTML += ` loses to ${compInput}`;
    p1.append(span2);
    p1.innerHTML += " . It's a lose. "

    h1.append(p1);

    updateScore("comp");
}


function updateScore(player){
    switch(player){
        case "user" :
            userScore++;
            userScoreElem.innerHTML = userScore;
            break;
            
        case "comp" :
            compScore++;
            compScoreElem.innerHTML = compScore;
            break;

        case "both" :
            userScore++;
            compScore++
            userScoreElem.innerHTML = userScore;
            compScoreElem.innerHTML = compScore;
            break;
    }
}