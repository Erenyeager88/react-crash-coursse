import { useState } from "react";

function Radio(){
    const [gender,setGender]=useState("female")
    const [city,setCity]=useState("karachi")
    return(
        <div>
            <h1>Radio functionalit and manupilation in React</h1>

            <input onChange={(event)=>setGender(event.target.value)}
            checked={gender=="male"} type="radio" name="gender" id="male" value="male"/>
            <label htmlFor="male">Male</label>
            <input    checked={gender=="female"} onChange={(event)=>setGender(event.target.value)} type="radio" name="gender" id="female" value="female"/>
            <label htmlFor="female">Female</label>
            <h2>Selected Gender : {gender}  </h2>
<br /><br />
            <select onChange={(event)=>setCity(event.target.value)}>
                <option value="karachi">Karachi</option>
                <option value="lahore">Lahore</option>
                <option value="islamabad">Islamabad</option>
            </select>
            <h2>selected City : {city}</h2>
        </div>
    )
}
export default Radio;