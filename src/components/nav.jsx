import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav className="app-nav">
    <div className="app-nav-wrapper">
      <Link className="app-nav-link" to="/">Home</Link>
      <Link className="app-nav-brand" to="/">React NewsFeed</Link>
      <Link className="app-nav-link" to="/topics">Topics</Link>
    </div>
  </nav>
)

export default Nav
