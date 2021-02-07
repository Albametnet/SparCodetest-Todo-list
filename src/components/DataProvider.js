    import React, { useState, useEffect, createContext } from 'react';

    export const DataContext = createContext();

    export const DataProvider = (props) => {
        const [todos, setTodos] = useState([])
       // para que se guarde el valor de los ultimos todos que habia en ls
        useEffect(()=>{
            const todoStore= JSON.parse(localStorage.getItem('todoStore'))
            if(todoStore) setTodos(todoStore)
        }, [])

        useEffect(()=>{
            localStorage.setItem('todoStore', JSON.stringify(todos))
        }, [todos])

        

        return (
            <DataContext.Provider value={[todos, setTodos]}>
                {props.children}
            </DataContext.Provider>
        )

    }