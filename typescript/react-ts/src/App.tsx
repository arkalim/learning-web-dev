import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

interface todo {
  id: number, 
  text: string
}

// React.FC is the Functional Component type
const App: React.FC = () => {
  // list of todo
  const [todos, setTodos] = useState<todo[]>([])

  const addTodo = (text:string):void => {
    setTodos([...todos, {id: todos.length, text: text}])
  }

  const deleteTodo = (id: number):void => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <div className="App">
      <NewTodo addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
