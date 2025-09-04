function Assign2(){
    let name ="dani";
    function sum(a,b){
        return a+b
    }
    let num1 = 10;
    let num2 = 10;
    let path ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Ftemplates%2Fs%2Ffood-logo%2F&psig=AOvVaw2vYQxIOLNNGOT3fftpxEMS&ust=1753970514259000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjQx-Lf5I4DFQAAAAAdAAAAABAE"
    function operation(a,b,op){
        if (op=="+"){
            return a+b;
        }else if(op=="-"){
            return a-b;
        }else{
            return a*b;
        }
    }
    let userObj={
        name : "dani",
        age :20,
        email: "dani@gmail.com"
    }
    let userArray=[
"shehroz","kasim","ali"
    ]
    return(
        <div>
             <h1>my name is {name}</h1>
<h2>sum of two numbers {sum(10,20)}</h2>
<h1> your desired operation {operation(20,10,"+")}</h1>
<h1> calling obj{userObj.email}</h1>
<h1>calling arrat {userArray[2]}</h1>
<img src={path}alt="" />
        </div>
    )
}
export default Assign2;