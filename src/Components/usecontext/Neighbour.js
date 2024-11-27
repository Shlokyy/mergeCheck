import { MainContext } from "./Parent"
import { useContext } from "react"

const Neighbour =()=>{
    const { num, name } = useContext(MainContext);
    return(
        <>
        {console.log("Neighbour context value", num)}
        {console.log("Neighbour context seocondvalue", name)}
        <h1>Neighbour</h1>
        </>
    )
}

export default Neighbour