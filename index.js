const btn=document.querySelector(".btn");
const close=document.querySelector("i");
const trailer=document.querySelector(".trailercontainer");
const video=document.querySelector("video");


btn.addEventListener("click",function(){
    trailer.classList.remove("active");
})
close.addEventListener("click",function(){
    trailer.classList.add("active");
    video.pause();
    video.currentTime=0;
})