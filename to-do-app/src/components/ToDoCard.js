import React, { useState } from "react";

const ToDoCard = (props) =>{
    const [crossText,setCrossText] = useState("crossTextFalse")

    const changeClass = (comp) =>{
        if(comp === true){
            return setCrossText("crossTextTure")
        }else {return setCrossText("crossTextFalse")}
    }
    
    return(
        <div>
            <p>To Do:</p>
            <p>{props.todo}</p>
            <p>Notes:</p>
            <p>{props.notes}</p>
        </div>
    )
}

export default ToDoCard;