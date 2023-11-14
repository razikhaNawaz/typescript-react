import React from 'react';

import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos=[
    new Todo('Learn React'),
    new Todo('Learn Typescript'),
    new Todo('Learn framer motion')
  ]
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
