import React, { useState } from 'react'

interface Props {
    addTodo: (text: string) => void;
}

const NewTodo: React.FC<Props> = (props) => {

    const [todo, setTodo] = useState<string>("")

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        props.addTodo(todo)
    }

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setTodo((e.target as HTMLInputElement).value)
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={todo} onChange={changeHandler}/>    
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodo
