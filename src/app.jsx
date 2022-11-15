import TodoList from './components/TodoList/TodoList'
import './app.css'
import Header from './components/Header/Header'
import { useState } from 'react'
import DarkModeProvider from './context/DarkModeContext'

const filters = ['all', 'active', 'completed']
function App() {
  const [filter, setFilter] = useState(filters[0])

  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  )
}

export default App
