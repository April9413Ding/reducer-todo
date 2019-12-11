import React from "react";
import ToDoCard from "./ToDoCard";

const ToDoBox = ({todoState}) =>{
    console.log(todoState)
    return(
        <div>
          {
              todoState.arr.map(item=>{
                  return <ToDoCard key={item.id} todo={item.todo} notes={item.notes} completed={item.completed}/>
              })
          }
        </div>
    )
}

export default ToDoBox;