
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <NewTodo/>
      <Todos />
    </div>
  );
}

export default App;
