let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;

let h2=document.querySelector("h2");
let btns=["red","blue","green","yellow"];

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
};
function levelUp(){
    userSeq=[];
    level++;

    h2.innerText=`Level ${level}`;
let ranIdx=Math.floor(Math.random()*4);
let ranColor=btns[ranIdx];
let ranBtn=document.querySelector(`.${ranColor}`);
gameSeq.push(ranColor);
console.log(gameSeq);
    gameFlash(ranBtn);
};

function checkAns(idx){
    // console.log(`curr level is ${level}`);

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score was <b> ${level}</b> <br>press anywhere to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
    
};
function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor= btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}


let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}