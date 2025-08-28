import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3 ms-5" to="/">Blog</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active fs-5 ms-3" to="/">Home</Link>
            </li>
          </ul>
          <Link to="/addBlog" className="btn btn-outline-light fs-5 me-5">Add Blog</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
