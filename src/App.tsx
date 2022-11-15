import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';   //import Todo interface

const App: React.FC = () => {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {  //function for adding todo to list
    e.preventDefault();   //used to prevent page refresh on todo submit

    if(todo) {    //if the user enters a todo
      setTodos([
        ...todos,   //pull in established todos
        { id: Date.now(), todo: todo, isDone: false } //match Todo interface model - not done upon creation
      ])
      setTodo('');  //reset todo
    }
  }

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputField>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
}

export default App;
