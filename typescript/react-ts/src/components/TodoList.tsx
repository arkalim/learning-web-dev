import React from 'react'

interface Props {
    // define the type of props
    todos: {id: number, text: string}[]
    deleteTodo: (id: number) => void;
}

// React.FC is a generic type that accepts the type of Props
const TodoList: React.FC<Props> = (props) => {
    return (
        <ul>
            {props.todos.map((todo) => (
            <li key={todo.id}>
                <span>{todo.text} </span>
                <button onClick={() => props.deleteTodo(todo.id)}>Delete</button>
            </li>
            ))}
        </ul>
    )
}

export default TodoList