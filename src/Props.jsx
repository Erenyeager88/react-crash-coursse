function Props(data){
    return(
        <div>
            <h1>hello {data.name}</h1>
           {data.email!==undefined?<h2> hello {data.name} your age is {data.age}  and email is {data.email}</h2>:null} 
        </div>
    )
}
export default Props;