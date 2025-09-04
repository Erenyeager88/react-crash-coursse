import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Props from './props'
import Header from './Header'
import Assign1 from './assign1'
import Assign2 from './Assign2'
import StateTest from './StateTest'
import Display from './Display'
import MultiState from './MultiState'
import OnChange from './OnChange'
import CheckBox from './CheckBox'
import Radio from './Radio'
import Map from './Map'
function App() {
  let name="ali"
let age=12
let email="ssaaadd@gmail.com"
const [student,setStudent]=useState()
  return (
    <>
    {/* <Header/> */}
      {/* <h1>hello react</h1> */}
      {/* <Car /> */}
      {/* <Assign1/> */}
{/* <Assign2/>    */}
{/* <StateTest/> */}
{/* <Display/> */}
{/* <MultiState/>0 */}
{/* <Props name="dani"/>
<Props name={name} age={age} email={email}/> */}
{/* {student?<Props name={student}/>:null}
      <button onClick={()=>setStudent("ALI")}>update</button> */}
      {/* <OnChange/> */}
      {/* <CheckBox/> */}
       <Map/>
      {/* <Radio/> */}
     
</>
  )
  function Car(){
    return(
      
      <div><h1>this is a car</h1></div>

    )
  }
}

export default App
