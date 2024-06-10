import React from 'react'

import './App.scss'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <main className="App">
      <Sidebar />
      <Navbar />
    </main>
  )
}
