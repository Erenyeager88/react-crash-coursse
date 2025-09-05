import { useState } from "react";

function ColorDropDown(){
    const [color,setColor]=useState("")
    return(
        <div> <select name="color" id="color-selection" >
            <option onClick={()=>setColor("green")} value="green">green</option>
            <option onClick={()=>setColor("blue")} value="blue">blue</option>
            <option onClick={()=>setColor("yellow")} value="yellow">yellow</option>
            </select></div>
    )
}
export default ColorDropDown;