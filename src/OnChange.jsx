import { useState } from "react";

function OnChange(){
    const [val1,setVal1]= useState("")
    const [val2,setVal2]= useState("")
    const [val3,setVal3]= useState("")
     function showVal(){
console.log(val1)
console.log(val2)
console.log(val3)
     }
     function clearAll(){
        setVal1("")
        setVal2("")
        setVal3("")
     }
    return(
<>
<input type="text" value={val1} onChange={(event)=>setVal1(event.target.value)} placeholder="field 1"/>
<input type="text" value={val2} onChange={(event)=>setVal2(event.target.value)} placeholder="field 1"/>
<input type="text" value={val3} onChange={(event)=>setVal3(event.target.value)} placeholder="field 1"/>
<h1>{val1}</h1>
<h1>{val2}</h1>
<h1>{val3}</h1>
<button onClick={()=>clearAll()}>Clear all</button>
<button onClick={()=>showVal()}>Show Value</button>
</>
    )
}
 export default OnChange;