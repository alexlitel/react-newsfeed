import React from 'react'
import PropTypes from 'prop-types'
import Nav from './nav'
import Routes from '../routes'
import '../app.css'


const App = ({ isLoading }) => (
  <div className="app">
    <Nav />
    <div className="app-content-wrapper">
      <Routes />
      { isLoading && <div className="app-loader" /> }
    </div>
  </div>
)

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default App
