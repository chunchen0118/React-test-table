import { useState } from 'react'
import Table_employee from './components/Table_employee'
import Table_task from './components/Table_task'

function App() {
  return <div className="App">
    <Table_employee/>
    <Table_task/>
  </div>
}

export default App
