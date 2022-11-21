import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;   //type pulled from Apps.tsx - when hover on setTodos
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos}: Props) => {
  return (
    <div className='container'>
      <Droppable droppableId='TodosList'>
        {(provided, snapshot) => (
          <div className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className='todoHeading'>
              Active Tasks
            </span>
            {todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {(provided, snapshot) => (
        <div className={`todos  ${snapshot.isDraggingOver ? 'dragcomplete' : 'remove'}`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <span className='todoHeading'>
            Completed Tasks
          </span>
          {completedTodos.map((todo, index) => (
            <SingleTodo
              index={index}
              todo={todo}
              todos={completedTodos}
              key={todo.id}
              setTodos={setCompletedTodos}
            />
          ))}
          {provided.placeholder}
        </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList