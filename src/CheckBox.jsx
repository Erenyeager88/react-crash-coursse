import { useState } from "react";

function CheckBox() {
    const[skills,setSkills]=useState([])
   const handleSkills=(event)=>{
        console.log(event.target.value,event.target.checked)
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    return (
        <div>
            <form action="">
                <input onChange={handleSkills} type="checkbox" id="php" value="php" />
                <label htmlFor="php">php</label>
                <br />
                <br />
                <input onChange={handleSkills} type="checkbox" id="python" value="python" />
                <label htmlFor="python">python</label>
                <br />
                <br />
                <input onChange={handleSkills} type="checkbox" id="java" value="java"/>
                <label htmlFor="java">java</label>
                <br />
                <br />
                <input onChange={handleSkills} type="checkbox" id="js" value="js" />
                <label htmlFor="js">js</label>
                <br />
                <br />
                <h1>{skills.toString()}</h1>
            </form>
        </div>
    )
}
export default CheckBox;