
import { useState } from "react";


type ChildProps = {
    parentCounter: number;
}

function ChildCounter(props: ChildProps){
    const [childCounter, setChildCounter] = useState<number>(0);
    function handleClickIncrement(){
        setChildCounter(childCounter + 1);
    }
    console.log("Rendering child component");
    return(
        <div style={{border: "1px dashed red"}}>
            <button onClick={handleClickIncrement}>Increment child Counter</button>
            <p>ChildCounter: {childCounter}</p>
            <p>ParentCounter: {props.parentCounter}</p>
        </div>
    )
}


function ParentCounter(){
    const [parentCounter, setParentCounter]= useState<number>(0);
    function handleClickIncrement(){
        setParentCounter(parentCounter+1);
    }
    console.log("Rendering child component")    
    return(
        <div style={{border: "1px dashed blue"}}>
            <button onClick={handleClickIncrement}>Increment Parent Counter</button>
            <ChildCounter parentCounter={parentCounter}/>
        </div>
    )
}


function App2(){
    return(
        <div className="App">
            app Works
            <br/>
            <ParentCounter/>
        </div>
    )
}



export default App2;
