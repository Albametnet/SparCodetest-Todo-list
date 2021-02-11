import React, { useState, useContext, useRef, useEffect } from 'react';
import { DataContext } from '../DataProvider';
import './index.scss'


export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('');
  const todoInput= useRef();

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, {name:todoName, complete:false}]) 
    setTodoName('');
    todoInput.current.focus();
  }

  useEffect(()=>{
    todoInput.current.focus();

  }, [] )

  return (
    <form className="form__bar" autoComplete="off" onSubmit= {addTodo}>
      <input type="text" name="text" id="todos" ref= {todoInput}
        required placeholder="Introduce one task" data-testid="input" value={todoName}
        onChange={e => setTodoName(e.target.value.toLowerCase())}
      />
      <button type="submit">Create</button>
    </form>
  )

}