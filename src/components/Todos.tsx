import React, { useContext } from "react";
import TodosContext from "../store/todo-context";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
const Todos: React.FC = () => {
    const context = useContext(TodosContext);
    return ( <ul className={classes.todos}>
       {context.items.map(item => <TodoItem key={item.id} text={item.text} onRemoveTodo={context.removeTodo.bind(null, item.id)}/>)}
    </ul>
    );
}

export default Todos;