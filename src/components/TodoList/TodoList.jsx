import React from 'react'
import { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'
import Todo from '../Todo/Todo'
import styles from './TodoList.module.css'

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: '1', text: '장보기', status: 'active' },
    { id: '2', text: '강의보기', status: 'active' },
  ])
  const handleAdd = (todo) => {
    setTodos([...todos, todo])
  }
  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)))
  }
  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id))
  }

  const filtered = getFilteredItems(todos, filter)

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  )
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos
  }
  return todos.filter((todo) => todo.status === filter)
}
