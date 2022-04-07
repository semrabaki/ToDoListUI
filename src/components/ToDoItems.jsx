import React from "react";
const ToDoItems = (props)=>{
    return <div onClick={()=>{
        props.onChecked(props.id)
    }}>
            <li>{props.text}</li>
    </div>
}

    // const [isDone,setIsDone]=useState(false);
    // function handleClick(){
    //     //we should get the oposite of previous value, after handle click
    //     setIsDone(prevValue=>{
    //         return !prevValue;
    //     });


  // return (
  //   <div  onClick={handleClick}>
  //        <li style={{textDecoration: isDone?"line-through":"none"}}>{props.text} </li>
  //   </div>
  // )
 



export default ToDoItems;