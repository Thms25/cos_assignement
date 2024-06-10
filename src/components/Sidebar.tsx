import React, { useState } from 'react'
import '../styles/Sidebar.scss'
import Logo from '../assets/svg/Logo.svg'
import Home from '../assets/svg/Home.svg'
import Generic from '../assets/svg/Generic.svg'
import Jobs from '../assets/svg/Jobs.svg'
import Person from '../assets/svg/Person.svg'
import Heart from '../assets/svg/Heart.svg'

export default function Sidebar() {
  const [selected, setSelected] = useState(0)
  const navItems = [
    {
      name: 'Home',
      icon: Home,
    },
    {
      name: 'Generic',
      icon: Generic,
    },
    {
      name: 'Jobs',
      icon: Jobs,
    },
    {
      name: 'Person',
      icon: Person,
    },
    {
      name: 'Heart',
      icon: Heart,
    },
  ]

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <img
              src={item.icon}
              alt={item.name}
              onClick={() => setSelected(index)}
              className={index === selected ? 'nav-item selected' : 'nav-item'}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
