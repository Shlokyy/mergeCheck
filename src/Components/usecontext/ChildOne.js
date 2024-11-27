import ChildTwo from "./ChildTwo"
import { MainContext } from "./Parent"
import { useContext } from "react"
const ChildOne =()=>{
    const { num, name } = useContext(MainContext);
    return(
        <>
        {console.log("mohit context value", num)}
        {console.log("mohit context seocondvalue", name)}

        <h1>ChildOne</h1>
        <ChildTwo/>
        </>
    )
}

export default ChildOne