import React, { useState } from "react";
const InputArea =(props)=>{
    const [inputText,setInputText] = useState("");
    function handleChange(event){
        console.log(event.target.value)
        const newValue = event.target.value;
        setInputText(newValue)
      }
    return <div>
        <input 
        type="text" 
        placeholder="Enter your todos.."
        value={inputText}
        onChange={handleChange}/>
        <button onClick={()=>{
            props.onAdd(inputText);
              //  clearing input after click
             setInputText("");
        }}>
          <span>Add</span>
        </button>
    </div>
}
export default InputArea;