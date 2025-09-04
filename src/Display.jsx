import { useState } from "react";

function Display(){
const [display,setDisplay]=useState(false)
    return(
        <div>
            <h1>this is display and hide functionality</h1>
            <button onClick={()=>setDisplay(!display)}>toggle</button>
           {display? <h1>this is dani</h1>:null}
            
           
        </div>
    )
}
export default Display;