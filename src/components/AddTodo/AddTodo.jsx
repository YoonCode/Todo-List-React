import React from 'react'
import { useState } from 'react'

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('')
  const handleChange = (e) => setText(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length === 0) {
      return
    }
    onAdd({ id: '고유값', text, status: 'active' })
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  )
}
