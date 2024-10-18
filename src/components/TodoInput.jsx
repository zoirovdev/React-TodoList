import { useState } from "react"

export default function TodoInput(props){
    const {handleAddTodos, todoVal, setTodoVal} = props

    return (
        <header>
            <input value={todoVal} placeholder="Enter todo..." onChange={(e)=> {
                setTodoVal(e.target.value)
            }}/>
            <button onClick={() => {
                handleAddTodos(todoVal)
                setTodoVal('')
            }}>Add</button>
        </header>
    )
}