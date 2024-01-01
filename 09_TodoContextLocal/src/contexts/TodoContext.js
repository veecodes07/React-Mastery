import { createContext, useContext } from "react";

//create and export  a  create context
//create and export a context to use the created context
//create and export the context to provide the context in other files with .provider

export const TodoContext = createContext({
    todo: [
        {
            id: 1,
            todo: 'todo msg',
            completed: false
        }
    ],
    addTodo: (todo) => { }, //Just need to define the functions need to perform
    //NO NEED TO TO DESCRIBE FUNCTIONALITY HERE, DONE IN APP.JSX
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider