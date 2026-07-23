import React , {useState} from "react";
function DB_connect(){
 const [FormData,setFormData]=useState({
    name:'',
    email:'',
    message:''

 });
 const[status,setStatus]=useState({
    type:'',
    msg:''
 })
 const[loading,setLoading]=useState(false);
 const handleInputData=(e)=>{
  const {name,value}=e.target;
  setFormData(
    prev=>({
        ...prev,
        [name]:value
    })
  );

 };
 const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    setStatus({
        type:'',
        msg:''
    });
    try{
        const response=await fetch('',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(FormData)
        });
        const result=await response.json();
        if(response.ok){
            setStatus({type:"success",msg:"Form submitted Successfully"})
            setFormData({name:'',email:'',msg:''});
        }
        else{
            setStatus({type:"failure",msg:"OopsSubmission Failed"})
        }
    }
    catch(error){
        setStatus({type:'error',msg:"Could not connect to Localhost"})
    }
    finally{
        setLoading(false);
    }

 }
  return(
        <>
      <center><div className="form">
            <h1> Send Message</h1>
            <form onSubmit={handleSubmit}>
            <label id="label_color"><b>Name:</b></label>
            <input id="box"
            type="text" 
            name="name" 
            value={FormData.name} 
            placeholder="Enter ur Name"

            required
            />
            <br/>
         <label id="label_color"><b>Email:</b></label>
            <input id="box"
            type="text" 
            name="email" 
            value={FormData.email} 
            placeholder="Enter ur Email"

            required
            />
            <br/>
            <label id="label_color"><b>Message:</b></label>
            <input id="box"
            type="text" 
            name="message" 
            value={FormData.message}
            placeholder="Enter ur Msg"
            required
            />
            <br/>
            <button id="btn"
            type="submit"

            >Submit</button>
            </form>
        </div>
        </center>
        </>
    )
}
export default DB_connect