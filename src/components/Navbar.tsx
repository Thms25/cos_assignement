// Styles
import '../styles/Navbar.scss'

// Assets
import Search from '../assets/svg/Search.svg'
import Avatar from '../assets/images/avatar.png'

// ----------------------------------------------------------

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h3 className="">Home</h3>

        <div className="searchbar">
          <img src={Search} alt="Search icon" className="search-icon" />
          <input
            type="text"
            placeholder="Search for companies on CareerOS"
            className="input-text"
          />
        </div>

        <div className="avatar-container">
          <img src={Avatar} alt="User avatar" />
        </div>
      </div>
    </nav>
  )
}
