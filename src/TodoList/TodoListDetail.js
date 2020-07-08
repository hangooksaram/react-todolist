import React from 'react'

const TodoListDetail = ({ item }) => {
    const { detail, text } = item
    return (
        <div>
            <h3>{text}</h3>
            <div>{detail}</div>
        </div>
    )
}

export default TodoListDetail;