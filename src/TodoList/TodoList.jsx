import React from 'react'
import { useState } from 'react'

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '1', text: '강의듣기', status: 'active' },
    { id: '2', text: '요리하기', status: 'active' },
  ])

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </section>
  )
}
