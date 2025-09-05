function Student({data}){

    return(
    <div style={{
        border:"2px solid blue",
        borderRadius:"30px",
        padding:"20px",
        margin:"10px",
        width:"250px"
    }}>
       <h3>name : <span style={{color:"blue"}}>{data.name}</span></h3>
        <h3> RollNo : <span style={{color:"blue"}}>{data.RollNo}</span></h3>
         <h3>age : <span style={{color:"blue"}}>{data.age}</span></h3>
         </div>
        )
}
export default Student;