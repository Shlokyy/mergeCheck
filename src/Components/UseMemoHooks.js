import { useState } from "react"

const UseMemoHooks= ()=>{

const [num, setNum] = useState(0)
const [name, setName] = useState(0)
const [status, setstatus] = useState(false)

const showandHide = ()=>{
    return <h4>HelloWorld</h4>
}
    return(<>
        <h1>UseMemo Hooks</h1>
        <h3>Rahul Value == {name}</h3>
        <h4>number == {num}</h4>
        <button onClick={()=>{setName(name+1)} }>Change</button>
        <button onClick={()=>{setNum(num+1); setstatus(!status)} }>Change</button>
        {status && showandHide()}
        </>
    )
}
export default UseMemoHooks