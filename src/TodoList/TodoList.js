import React from 'react'
import './scss/TodoList.scss'
import TodoListItem from './TodoListItem'
const TodoList = ({ todos, onRemove, onDetail ,onToggle}) => {
    return(
        <div className = "TodoList">
            {console.log(todos)}
            {todos.map((todo) => (
                <TodoListItem onDetail = {onDetail} onToggle = {onToggle} onRemove = {onRemove} todo = {todo} key = {todo.id}/>                
            ))}
        </div>
    )
}

export default TodoList