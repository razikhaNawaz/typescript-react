import React, {useContext,useRef } from 'react'
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo:React.FC = () => {
    const TodoTextInputRef=useRef<HTMLInputElement>(null)
    const TodosCtx=useContext(TodosContext)

    const submitHandler=(event: React.FormEvent)=>{
        event.preventDefault();

        const enteredText=TodoTextInputRef.current!.value

        if(enteredText.trim().length===0){
            return;
        }
        TodosCtx.addTodo(enteredText)
    }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor='text'>Todo Text</label>
        <input type="text" id='text' ref={TodoTextInputRef} />
        <button>Add todo</button>
    </form>
  )
}

export default NewTodo