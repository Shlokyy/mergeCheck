import ChildOne from "./ChildOne"
import { createContext, useState } from "react"
export const MainContext = createContext()
const Parent =()=>{
    const [num, setNum]= useState(0)
    return(
        <>
        <h1>Parent</h1>
        <MainContext.Provider value={{num,name: "rahul"}} >
        <ChildOne/>
        </MainContext.Provider>
        </>
    )
}

export default Parent