import React, { useEffect, useState } from 'react';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    saveLocal();
  }, [todos]);

  const saveLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocal = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem('todos'));
      setTodos(local);
    }
  }

  return (
    <div className="App">
      <h2>TodoList</h2>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
