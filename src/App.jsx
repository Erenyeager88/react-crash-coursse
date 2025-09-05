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
import Student from './Student'
import ColorDropDown from './ColorDropDown'
function App() {
  const student=[
        {
            id:1,
            RollNo:331,
            name:"Daniyal",
            age:20,
        },
         {
            id:2,
            RollNo:332,
            name:"ali",
            age:18,
        },
         {
            id:3,
            RollNo:333,
            name:"zubair",
            age:10,
        },
         {
            id:4,
            RollNo:335,
            name:"gulmina",
            age:18,
        }
    ]
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
       {/* <Map/> */}
      {/* <Radio/> */}
      {/* {
        student.map((item)=>(
          <div key={item.id}>
            <Student data={item}/>
          </div>
        ))
      }
      */}
      <h1>clock component</h1>
      <ColorDropDown/>
</>
  )
  function Car(){
    return(
      
      <div><h1>this is a car</h1></div>

    )
  }
}

export default App
