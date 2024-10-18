import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
    const [todos, setTodos] = useState([])
    const [todoVal, setTodoVal] = useState('')

    function persistData(newList){
      localStorage.setItem('todos', JSON.stringify({todos: newList}))
    }


    function handleAddTodos(newTodo){
      const newTodos = [...todos, newTodo]
      persistData(newTodos)
      setTodos(newTodos)
    }

    function handleDeleteTodo(index){
      const newTodos = todos.filter((todo, todoIndex) => {
        return todoIndex !== index
      })
      persistData(newTodos)
      setTodos(newTodos)
    }

    function handleEditTodo(index){
      const valueTobeEdited = todos[index]
      setTodoVal(valueTobeEdited)
      handleDeleteTodo(index)
    }

    useEffect(()=> {
      if (!localStorage){
        return
      }

      let localTodos = localStorage.getItem('todos')
      if (!localTodos){
        return
      }

      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)
    }, [])

    return (
      <>
        <TodoInput todoVal={todoVal} setTodoVal={setTodoVal} handleAddTodos={handleAddTodos}/>
        <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
      </>
    )
}

export default App
