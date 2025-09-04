    
function Header(){
  let num=0;
    function increase (){
      alert("work")
    }
return(
    <div>
    <h1>this is Headee</h1>
    <button onClick={increase}>Click me{num}</button>
    </div>
)
}
export default Header;