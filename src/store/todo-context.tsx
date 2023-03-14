import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text:string) => void;
    removeTodo: (id:string) => void
}

const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id:string) => {}
});

export default TodosContext;

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const removeItemHandler = (todoId: string) => {
      setTodos((prevTodos => {
        return prevTodos.filter(todo => todo.id !== todoId);
      }));
    }
  
    const addTodoHandler = (text: string) => {
      const newTOdo = new Todo(text);
  
    setTodos((prevTodos) => {
       return prevTodos.concat(newTOdo);
  });
  
    };

    const contextValue:TodosContextObj
     = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeItemHandler
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}