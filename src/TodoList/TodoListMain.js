import React, { useState, useRef, useCallback, useEffect } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import TodoTemplate from './TodoTemplate'
import TodoInsert from './TodoInsert'
import TodoList from './TodoList'
import TodoListClock from './TodoListClock'
import Moment from 'react-moment'
import './scss/TodoListMain.scss'
import './scss/TodoListClock.scss'

const TodoListMain = () => {
    const [todos, setTodos] = useState([{
        id: 0,
        text: '',
        checked: false,
        date: '',
        detail: '',
        category : ""
    }
    ])
    const onToggle = useCallback(
        id => {
            setTodos(
                todos.map(todo =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo)
            )
        }, [todos]
    )
    const nftodos = todos.filter(item => (
        item.id !== 0
    ))
    const nextId = useRef(1);
    const isItem = Object.getOwnPropertyNames(todos);

    const onInsert = useCallback(
        (text, detail) => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
                date: <Moment format="YYYY MMMM DD HH:mm" />,
                detail
            };
            setTodos(todos.concat(todo))
            nextId.current += 1
        }, [todos]
    )
    const onRemove = useCallback(
        id => {
            setTodos(todos.filter(todo => todo.id !== id));
        }
        , [todos])

    const onDetail = useCallback(
        id => {
            return (
                <div>{todos.find(todo => todo.id === id)}</div>
            )
        }
        , [todos])
    return (
        <div>
            <div className="clock"><TodoListClock /></div>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert} item={todos} />
                {nextId.current === 1 || isItem.length === 2 ? <div className="first">첫 번째 할일을 입력</div> : <TodoList onToggle={onToggle} onRemove={onRemove} onDetail={onDetail} todos={nftodos} />}

            </TodoTemplate>
        </div>
    )
}

export default TodoListMain