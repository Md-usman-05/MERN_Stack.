const show=()=>{
const Name=document.getElementById("name").value;
const Email=document.getElementById("email").value;
const Password=document.getElementById("password").value;
const Phn_NO=document.getElementById("Phn.NO").value;
let gender='';
const genders=document.getElementsByName("gender");
for(let i=0;i<genders.length;i++){
    if(genders[i].checked){
        gender=genders[i].value;
        break;
    }
}
let qualification=[];
const qualify=document.getElementsByClassName("Qualification");
for(let i=0;i<qualify.length;i++){
    if(qualify[i].checked){
            qualification.push(qualify[i].value);
    }
}
const DOB=document.getElementById("date").value;
let image=document.getElementById("image").files[0];
let imgname=image?image.name:'No file selected';
document.getElementById("result").innerHTML=``

};