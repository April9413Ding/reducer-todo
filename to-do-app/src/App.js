import React, { useReducer, useState } from 'react';
import styled from "styled-components";
import './App.css';
import { reducer, initialState } from './reducer/todoreducer';
import ToDoBox from './components/ToDoBox';

function App() {
  const [todoState,dispatch] = useReducer(reducer, initialState);
  const [newToDo,setNewToDo] = useState("");
  const [newNotes,setNewNotes] = useState("");

  const handleChangeTodo =(e)=>{
    setNewToDo(e.target.value)
  }

  const handleChangeNotes =(e)=>{
    setNewNotes(e.target.value)
  }

  const handleClick = () =>{
    dispatch({type:"ADD_TO_DO", payload:{todo:newToDo,
      notes:newNotes,
      completed:false,
      id: new Date(),}})
    
    setNewToDo("");
    setNewNotes("");
  }

  return (
    <div className="App">
      <FormBox>
      <p>To Do:</p>  
      <InputBox value={newToDo} onChange={handleChangeTodo}/> 
      <p> Notes:</p> 
      <TextBox rows="10" value={newNotes} onChange={handleChangeNotes}></TextBox>
      <Button onClick={handleClick}>Add To Do</Button>
      </FormBox>
      <ToDoBox todoState={todoState}/>
    </div>
  );
}

export default App;

const FormBox = styled.div`
  margin:0 auto;
  padding:20px;
  max-width:800px;
  display:flex;
  flex-direction:column;

`;

const InputBox = styled.input`
  border:none;
  border-bottom: 1px solid white;
  background-color: transparent;
  width:100%;
  height:20%;
  margin:10px 0;
  font-size:20px;
  color:white;
`;

const TextBox = styled.textarea`
  border:none;
  border-bottom: 1px solid white;
  background-color: transparent;
  width:100%;
  margin:10px 0;
  font-size:16px;
  color:white;
`;

const Button = styled.button`
  margin:10px;
  max-width:300px;
  height:44px;
  color: black;
  background-color: #00FFFF;
  border: none;
  border-radius:5px;
  font-size:20px;
`;