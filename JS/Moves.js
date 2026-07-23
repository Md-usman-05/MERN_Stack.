const box=document.getElementById("box");
let x=0;
let y=0;
function moveRight(){
    x+=20;
    box.style.left=x+"px";
}
function moveLeft(){
    x-=20;
    box.style.left=x+"px";
}
function moveUp(){
    y-=20;
    box.style.top=y+"px";
}
function moveDown(){
    y+=20;
    box.style.top=y+"px";
}
box.addEventListener("mouseover",()=>{
    box.style.border="6px pink solid";
    box.style.backgroundColor="cyan";
});
box.addEventListener("mouseout",()=>{
    box.style.border="none";
    box.style.backgroundColor="";
});
document.addEventListener("keydown",(event)=>{
    if(event.key==="ArrowUp"){
        y-=30;
    }
    if(event.key==="ArrowDown"){
        y+=30;
    }
    if(event.key==="ArrowLeft"){
        x-=30;
    }
    if(event.key==="ArrowRight"){
        x+=30;
    }
    box.style.left=x+"px";
    box.style.top=y+"px";
});