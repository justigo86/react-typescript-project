import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;   //type pulled from Apps.tsx
}

const TodoList = ({ todos, setTodos,}: Props) => {
  return (
    <div className='todos'>
      {todos.map(todo => (
        <SingleTodo todo={todo} todos={todos} setTodos={setTodos}></SingleTodo>
      ))}
    </div>
  )
}

export default TodoList