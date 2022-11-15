import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;  //type taken from setTodo useState in App.tsx
  handleAdd: (e: React.FormEvent) => void;    //handleAdd function - types must match function in App.ts
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {    //set type of parameters to interface Props
                                                      //could also set function type to React.FC<Props>

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input'
      onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur();
      }}  //must include event parameter
    >
      <input
        ref={inputRef}
        type="input"
        placeholder='Enter a task'
        className='inputBox'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}   //set todo variable to the value of the event target
      />
      <button className='inputSubmit' type='submit'>Go</button>
    </form>
  )
}

export default InputField