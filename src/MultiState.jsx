import { useState } from "react"

function MultiState(){
    const [count,setCount]=useState(0)
    return (
        <>
        <h1>this is use of multiple condition state</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>increase</button>
        {count==0?<h1>condition is 0</h1>
    :count==1?<h1>condition is 1</h1>:
    count==2?<h1>condition is 2</h1>:
    count==3?<h1>condition is 3</h1>:
    count==4?<h1>condition is 4</h1>:
    count==5?<h1>condition is 5</h1>:
    <h1>condition does not match</h1>
}
        </>
    )
}
export default MultiState;