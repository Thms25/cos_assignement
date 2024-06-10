import React from 'react'

// Styles
import './App.scss'

// Components
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import HomeContent from './components/HomeContent'

// ----------------------------

export default function App() {
  return (
    <main className="App">
      <Sidebar />
      <Navbar />
      <HomeContent />
    </main>
  )
}
