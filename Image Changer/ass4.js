

const image=document.getElementById("myImage");
const btn=document.getElementById("Btn");

const img1="Images/img1.jpg";
const img2="Images/img2.jpg";

let toggle=true;

btn.addEventListener("click", function(){
    if(toggle){
        image.src=img2;
    }
    else{
        image.src=img1;
    }
    toogle=!toogle;
});
