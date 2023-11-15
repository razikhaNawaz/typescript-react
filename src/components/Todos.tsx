import React, {useContext} from 'react'

import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem'
import classes from './Todos.module.css';

const Todos:React.FC = () => {
  const TodosCtx=useContext(TodosContext)
  return (
    <div>
        <ul className={classes.todos}>
          {TodosCtx.items.map((item)=>(
            <TodoItem key={item.id} text={item.text} onRemoveTodo={TodosCtx.removeTodo.bind(null, item.id)}/>
          ))}
        </ul>
    </div>
  )
}

export default Todos