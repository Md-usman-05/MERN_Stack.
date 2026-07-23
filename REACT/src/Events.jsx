import { useState } from "react";
import onImg from "./assets/on light image.png";
import offImg from "./assets/off light image.jpeg";

function Events(){
    function press(e){
        alert("Key Pressed: "+e.key);
    }
    const [isOn, setIsOn] = useState(false);

    return(
        <>
        <div>
            <button onMouseOver={() =>alert("Jerry Files!")}>Jerry</button>
            <button onMouseLeave={()=>alert("tom Files!")}>Tom</button>
        </div>

        <div style={{marginTop:20}}>
            <img src={isOn?onImg:offImg} alt={isOn?'On':'Off'} style={{width:190, height:'auto'}} />
            <br/>
            <button onClick={() => setIsOn(prev=>!prev)}style={{marginTop:10}}>
                {isOn?'Turn Off':'Turn On'}
            </button>
        </div>
        <div style={{marginTop:20}}>
            <input onKeyDown={press} placeholder="Press any key" />
            <input onFocus={()=>console.log("Input Focused")} onBlur={()=>console.log("Input Blurred")} placeholder="Focus/blur me" />
        </div>
        </>
    );
}

export default Events;