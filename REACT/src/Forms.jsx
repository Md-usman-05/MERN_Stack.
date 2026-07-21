import {useState} from "react";

function Forms(){
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        gender:"",
        skills:""
    });
    const [submitted,setSubmitted]=useState(null);
    const change=(e)=>{
        const { name, value, type, checked } = e.target;
        setUser(prev=>({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitted(user);
    };
    return(
        <>
        <div style={{margin:"20px"}}>
            <h1>Forms</h1>
            <form onSubmit={handleSubmit}>
                <label><b>Name:</b></label>
                <input type="text" name="name" value={user.name} onChange={change} placeholder="Enter Name" />
                <br/>
                <label><b>Email:</b></label>
                <input type="email" name="email" value={user.email} onChange={change} placeholder="Enter Email" />
                <br/>
                <label><b>Password:</b></label>
                <input type="password" name="password" value={user.password} onChange={change} placeholder="Enter Password" />
                <br/>
                <label><b>Phone:</b></label>
                <input type="number" name="phone" value={user.phone} onChange={change} placeholder="Enter Phone" />
                <br/>
                <label><b>Gender:</b></label>
                <input type="radio" name="gender" value="male" onChange={change} checked={user.gender==="male"} /> Male
                <input type="radio" name="gender" value="female" onChange={change} checked={user.gender==="female"} /> Female
                <input type="radio" name="gender" value="other" onChange={change} checked={user.gender==="other"} /> Other
                <br/>
                <label><b>Skills:</b></label>
                <select name="skills" value={user.skills} onChange={change}>
                    <option value="">Select Skill</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                    <option value="react">React</option>
                </select>
                <br/>
                <button type="submit">Submit</button>
            </form>
            {submitted && (
                <>
                <h2>Submitted Data</h2>
                <div style={{background:'#eef7ff',padding:'10px'}}>
                    <p><b>Name:</b> {submitted.name || '—'}</p>
                    <p><b>Email:</b> {submitted.email || '—'}</p>
                    <p><b>Password:</b> {submitted.password ? '••••••' : '—'}</p>
                    <p><b>Phone:</b> {submitted.phone || '—'}</p>
                    <p><b>Gender:</b> {submitted.gender || '—'}</p>
                    <p><b>Skills:</b> {submitted.skills || '—'}</p>
                </div>
                </>
            )}
        </div>
        </>
    );
}

export default Forms;
