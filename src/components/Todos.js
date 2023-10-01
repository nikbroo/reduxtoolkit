import React from 'react'
import { useSelector } from 'react-redux'

const Todos = () => {

    const todos = useSelector(state => state.todos.todos)
    console.log(todos);
  return (
    <div>Todos</div>
  )
}

export default Todos