import React, { useState } from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, seteditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => 
      todo.id===id ? {...todo, isDone: !todo.isDone} : todo
    ))
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => (
      todo.id===id ? {...todo, todo: editTodo } : todo
    )))
      setEdit(false);
  }

  return (
    <form className='todoSingle' onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ?
        (<input
          value={editTodo}
          onChange={(e) => seteditTodo(e.target.value)}
          className='todoSingleText'/>)
      :
        todo.isDone ?
          (<s className='todoSingleText'>{todo.todo}</s>)
        : (<span className='todoSingleText'>{todo.todo}</span>)
      }
      <span className='todoSingleText'></span>
      <div>
        <span className="icon" onClick={() => {
          if (!edit && !todo.isDone) { setEdit(!edit)}
        }}>
          <AiFillEdit/>
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete/></span>
        <span className="icon" onClick={() => handleDone(todo.id)}><MdDone/></span>
      </div>
    </form>
  )
}

export default SingleTodo