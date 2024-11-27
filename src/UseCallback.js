import { useCallback, useState } from "react"
import UseCallBackParaent from "./UseCallBackParaent"

const UseCallback = () => {
    const [number, setnumber] = useState(1)
    const updateValue  =useCallback(()=>{
        setnumber(number + 1)
    },[number])
    return (
        <>
        {console.log("check mohit hello render")}
            <h1>
                useCallback
                {number}
            </h1>
            <UseCallBackParaent/>
            <button onClick={updateValue}>Increase</button>
        </>
    )
}

export default UseCallback