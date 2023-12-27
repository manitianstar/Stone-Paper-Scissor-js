let user_score = 0;
let comp_score = 0;
let choices = document.querySelectorAll(".choice");
let finalmsg = document.querySelector(".msg");
let finaldivmsg = document.querySelector(".msg-container");
const gencompchoice = () => {
  const compchoice = ["stone", "paper", "scissor"];
  const rand = Math.floor(Math.random() * 3);
  return compchoice[rand];
};
const drawgame = () => {
  console.log("game has been drawn");
};
showwinner = (userwin) => {
  if (userwin) {
    console.log("you win");
    user_score++;
    let score = document.querySelector("#user");
    score.innerText = user_score;
    finalmsg.innerText = "user won";
    finalmsg.style.backgroundColor="green";
  } else {
    console.log("you lose");
    comp_score++;
    let score1 = document.querySelector("#computer");
    score1.innerText = comp_score;
    finalmsg.innerText = "computer won";
    finalmsg.style.backgroundColor="red";
  }
};
playgame = (userchoice) => {
  console.log("user choice is", userchoice);
  const compchoice = gencompchoice();
  console.log("computer choice is", compchoice);
  if (userchoice === compchoice) {
    drawgame();
    user_score++;
    comp_score++;
    let score = document.querySelector("#user");
    score.innerText = user_score;
    let score1 = document.querySelector("#computer");
    score1.innerText = comp_score;
    finalmsg.innerText = "game drawn";
    finalmsg.style.backgroundColor="yellow";
  } else {
    let userwin = true;
    if (userchoice === "stone") {
      if (compchoice === "scissor") userwin = true;
      else userwin = false;
    } else if (userchoice === "paper") {
      if (compchoice === "scissor") userwin = false;
      else userwin = true;
    } else {
      if (compchoice === "stone") userwin = false;
      else userwin = true;
    }
    showwinner(userwin);
  }
};
choices.forEach((choice) => {
  // console.log(img1);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("choice was clicked - ", choice);
    playgame(userchoice);
  });
});
