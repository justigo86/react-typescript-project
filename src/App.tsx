import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';   //import Todo interface
import { DragDropContext } from 'react-beautiful-dnd';

const App: React.FC = () => {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

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
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className='heading'>Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputField>
        <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}></TodoList>
      </div>
    </DragDropContext>
  );
}

export default App;
