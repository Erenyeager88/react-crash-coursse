function Map(){
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

    return(
        <>
            <h1>this shows the use of loop for showing data </h1>
            <table border="1">
             <thead >
                <tr>
                    <td>id</td>
                    <td>RollNo</td>
                    <td>name</td>
                    <td>age</td>
                </tr>
             </thead>
             <tbody >
                {student.map((student)=>(
                    <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.RollNo}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                </tr>
            ))}
             </tbody>
</table>       
 </>
    )
}
export default Map;