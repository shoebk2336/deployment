const { useState } = require("react")




const Counter=()=>{
const [value,setvalue]=useState(0)

    return(
        <div>
        <h1>counter khan</h1>
        <h2>shoeb bhai</h2>
<hr/>
<h1>{value}</h1>
<div>
<button onClick={()=>setvalue(value-1)} >-</button>
<button onClick={()=>setvalue(value+1)}>+</button>
</div>


        </div>
    )
}
export default Counter