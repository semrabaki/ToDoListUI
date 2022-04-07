import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItems from "./ToDoItems";
function App() {
  const [items, setItems] = useState([]);
 
  function addItems(inputText){
    // complete the code when you click item should be added on the list
   setItems((prevItems)=>{
    //  hold all of the previous items, and add the the new item at the end of the array
     return [...prevItems,inputText]
   });}
function deleteItem(id){
  // console.log('Delete!!!')
  setItems((prevItems =>{
    return prevItems.filter(
      (eachItem,index)=>{
        // id only belogs to the item that is clicked
        // we are returning all indexes that does not include id
        return index!==id
      })}))}
  return (
    <div className="container">
      <div className="heading">
        <h1>To Do List</h1>
      </div>
      <div className="form">
        <InputArea onAdd={addItems}/>
      </div>
      <div>
        <ul>    
          {items.map((eachItem,index)=><ToDoItems 
          text={eachItem}
          onChecked={deleteItem}
          key={index}
          id={index}
         />)}
        </ul>
      </div>
    </div>
  );
}
export default App;