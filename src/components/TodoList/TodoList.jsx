import React from 'react'
import { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '1', text: '장보기', status: 'active' },
    { id: '2', text: '강의보기', status: 'active' },
  ])
  const handleAdd = (todo) => {
    setTodos([...todos, todo])
  }

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  )
}
