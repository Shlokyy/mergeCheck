import { useReducer, useState } from "react"

const reducer = (state, action)=>{
    switch(action.type){
        case "Increament":
            return {num : state.num + action.payload, status : !state.status}
        default :
        return {num : 0 , status : !state.status}
    }
    
}
const UseReducerHooks=()=>{
    const [ num, setNum] = useState(0)
    const [status, setStatus] = useState(true)

    const[state, dispatch] = useReducer(reducer, {
        status : true,
        num : 0
    })
    return(
        <>
        <h1>with useState Hook</h1>
        <h3>{num}</h3>
        <button onClick={()=>{setNum(num+1); setStatus(!status)}}>Change</button>
        {status && <h4>this is magic</h4>}

        <div>
        <h1>with useReducer Hook</h1>
        <h3>{state.num}</h3>
        <button onClick={()=>{dispatch({type:"Increament", payload : 10})}}>Change</button>
        {state.status && <h4>this is magic</h4>}
        </div>
        </>
    )
}

export default UseReducerHooks