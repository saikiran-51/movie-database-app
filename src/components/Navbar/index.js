import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'

import './index.css'

const Navbar = () => {
  const [searchInput, setSearchInput] = useState('')

  const history = useHistory()

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const onClickSearch = () => {
    if (searchInput.trim() !== '') {
      history.push(`/search/${searchInput}`)
    }
  }

  return (
    <nav className="navbar-container">
      <Link to="/" className="website-logo-link">
        <h1 className="website-logo">movieDB</h1>
      </Link>

      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/top-rated" className="nav-link">
            Top Rated
          </Link>
        </li>

        <li>
          <Link to="/upcoming" className="nav-link">
            Upcoming
          </Link>
        </li>
      </ul>

      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          onChange={onChangeSearchInput}
          placeholder="Search"
          className="search-input"
        />

        <button type="button" onClick={onClickSearch} className="search-button">
          Search
        </button>
      </div>
    </nav>
  )
}

export default Navbar
