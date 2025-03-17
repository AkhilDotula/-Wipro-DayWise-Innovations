import React,{useState} from "react";

const ButtonClickCounter = ()=>{
    const[count, setCount] = useState(0);

  const handleClick = () =>{
        setCount(count +1);
    };
   
    return (
        <div>
            <h1>ButtonClickCounter using Class Component</h1>
            <p>Button clicked{count} time</p>
            <button onClick={handleClick}>ClickMe</button>
        </div>
    );
};
    export default ButtonClickCounter
