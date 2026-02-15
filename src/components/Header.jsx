import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="container-fluid" style={{backgroundColor:"#1b3a4b"}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="logo col-auto">
            <h2>Movies</h2>
          </div>
          <nav className='col-auto'>
            <ul className='d-flex'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
}
