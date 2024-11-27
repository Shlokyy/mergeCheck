import { useState, useEffect, useRef } from "react"

const Hookspractice = () => {
    // -----useState-----
    const [num, setnum] = useState(0)
    const [name, setName] = useState("rahul")
    // -----useEffect-----
    useEffect(() => {
        //It runs Only when component load
        console.log("helllo mohit --- UseEffect")
    }, [num])
    // -----useRef-----
    const inputRef = useRef()
    const refFunction = ()=>{
        inputRef.current.value = "mohit"
    }
    return (
        <>
            <div>
                <h1>UseState</h1>
                <h3>{num}</h3>
                <button onClick={() => setnum(num + 1)}>Increament</button>
                <button onClick={() => setnum(num - 1)}>Decreament</button>
            </div>
            <div>
                <h1>UseEffect</h1>
                <h3>{name}</h3>
                <button onClick={() => setName("mohit")}>Change Name</button>
            </div>
            <div>
                <h1>useRef</h1>
                <input type="text" ref={inputRef}/>
                <button onClick={() =>refFunction()}>Change</button>
            </div>
        </>
    )
}

export default Hookspractice