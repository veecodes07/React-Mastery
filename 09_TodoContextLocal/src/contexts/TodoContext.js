import { createContext, useContext } from "react";

//create and export  a  create context
//create and export a context to use the created context
//create and export the context to provide the context in other files with .provider

export const TodoContext = createContext({})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider