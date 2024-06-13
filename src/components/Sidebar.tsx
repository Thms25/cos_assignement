// Hooks
import { useState } from 'react'

// Styles
import '../styles/Sidebar.scss'

// Assets
import Logo from '../assets/svg/Logo.svg'
import Home from '../assets/svg/Home.svg'
import Generic from '../assets/svg/Generic.svg'
import Jobs from '../assets/svg/Jobs.svg'
import Person from '../assets/svg/Person.svg'
import Heart from '../assets/svg/Heart.svg'
import Exit from '../assets/svg/Exit.svg'
import Files from '../assets/svg/Files.svg'
import Puzzle from '../assets/svg/Puzzle.svg'

// --------------------------------------------

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
    {
      name: 'Files',
      icon: Files,
    },
    {
      name: 'Puzzle',
      icon: Puzzle,
    },
  ]

  return (
    <nav className="sidebar">
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

      <div className="exit">
        <img src={Exit} alt="Exit" className="exit-icon" />
      </div>
    </nav>
  )
}
