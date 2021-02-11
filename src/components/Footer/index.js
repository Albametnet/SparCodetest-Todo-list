import React, { useContext, useState } from 'react';
import { DataContext } from '../DataProvider';
import './index.scss'


export default function Footer({ onSetToken }) {
  const [checkAll, setCheckAll] = useState(false)
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos]
    newTodos.forEach(todo => {
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }

  const newTodosComplete = () => {
    return todos.filter(todo => todo.complete === false
    )
  }

  const deleteTodo = () => {
    setTodos(newTodosComplete())
    setCheckAll(false)
  }

  const onLogOut = () => {
    onSetToken("")
    sessionStorage.removeItem('todoStore');
  }

  return (
    <>
      {
        todos.length === 0 ? <h2 data-testid="notodos">Great. We have nothing to do</h2>
          :
          <div className="row">
            <label htmlFor="all">
              <input type="checkbox" name="all" id="all" onChange={handleCheckAll} checked={checkAll} />
              <p className="row__name">All</p>
              <p className= "row__items" data-testid="todoCount">YOU HAVE {newTodosComplete().length} TODOS</p>
            </label>
            <button className="row__items-delete-button" id="delete" onClick={deleteTodo} >Delete</button>
          </div>
      }
    </>

  )

}