import React, { useState, useContext, useRef, useEffect } from 'react';
import { DataContext } from './DataProvider';

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('');
  const todoInput= useRef();

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, {name:todoName, complete:false}]) 
    setTodoName('');
    todoInput.current.focus();
   // aqui lo que hace en el submit es coger todos los todos anteriores y 
   //añadirle uno con el nombre del value del input y sin completar y lo vuelve a dejar vacio el input
  }

  useEffect(()=>{
    todoInput.current.focus();

  }, [] )

  return (
    <form autoComplete="off" onSubmit= {addTodo}>
      <input type="text" name="text" id="todos" ref= {todoInput}
        required placeholder="Whats need to be done?" value={todoName}
        onChange={e => setTodoName(e.target.value.toLowerCase())}
      />
      <button type="submit">Create</button>
    </form>
  )

}