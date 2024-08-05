//Program for counting clicks

const decBtn= document.getElementById("dec");
const resBtn= document.getElementById("res");
const incBtn= document.getElementById("inc");

const countLabel=document.getElementById("countLabel");

let count=0;

incBtn.onclick= function(){
    count++;
    countLabel.textContent=count;
}

decBtn.onclick= function(){
    count--;
    countLabel.textContent=count;
}

resBtn.onclick= function(){
    count=0;
    countLabel.textContent=count;
}