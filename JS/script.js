const show=(event)=>{
    event.preventDefault();
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
    const result=document.getElementById("result");
    if(result){
        result.innerHTML=`
    <h2>Form Data:</h2>
    <p><b>Name:</b> ${Name}</p>
    <p><b>Email:</b> ${Email}</p>
    <p><b>Password:</b> ${Password}</p>
    <p><b>Phone Number:</b> ${Phn_NO}</p>
    <p><b>Gender:</b> ${gender}</p>
    <p><b>Qualification:</b> ${qualification.join(", ")}</p>
    <p><b>Date of Birth:</b> ${DOB}</p>
    <p><b>Image:</b> ${image ? `<img src="${URL.createObjectURL(image)}"alt="Selected Image" width="100">`:'No file selected'
    }</p>
    `;
    }
};