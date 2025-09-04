import { useState } from "react"

function StateTest(){
const [count,setCount]=useState(0);
const [rcount,setRCount]=useState(10)
    return(
        <div>
<h1>count : {count}</h1>
<button onClick={()=> setCount(count + 1)}>increase count</button>
<h2> another counter {rcount}</h2>
<button onClick={()=> setRCount(rcount - 1)}>decrease count</button>
        </div>
    )
}
export default StateTest;