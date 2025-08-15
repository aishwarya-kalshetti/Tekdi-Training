let count=0;
const countDisplay = document.getElementById("count");
const increment=document.getElementById("increment");
const decrement=document.getElementById("decrement");

increment.addEventListener("click",function(){
    count++;
    countDisplay.innerText=count;
});
decrement.addEventListener("click",function(){
    count--;
    countDisplay.innerText=count;
});


