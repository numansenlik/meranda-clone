import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"

function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);


  return (
    <>
      <React.Fragment>
        <header className="header">
          <div className="header-top-container">
            <div className="logo">
              <Link to="/" >Meranda</Link>
            </div>
            <div className="buttons-container">
              <div className="buttons">
                <a href="#" target="_blank" className="fa-brands fa-facebook-f" />
                <a href="#" target="_blank" className="fa-brands fa-twitter" />
                <a href="#" target="_blank" className="fa-brands fa-instagram" />
              </div>
              <form className="search-form">
                <input type="text" className="search-input" id="search-box" placeholder="Search..." />
                <button className="fas fa-search" type="submit" />
              </form>
            </div>
            <button id="menu-btn" className="fas fa-bars" onClick={()=>setIsNavOpen(prev => !prev)}>
            </button>
          </div>
        </header>
        <div className={`navbar-containers ${isNavOpen ? "active" : ""}`}>
          <nav className="navbars ">
            <div className="navbar-close-container ">
              <i onClick={()=>setIsNavOpen(false)} className="fa-sharp fa-solid fa-xmark" />
            </div>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <a className="nav-link" href="/">Categories</a>
            <a className="nav-link" href="/">Politics</a>
            <a className="nav-link" href="/">Business</a>
            <a className="nav-link" href="/">Health</a>
            <a className="nav-link" href="/">Design</a>
            <a className="nav-link" href="/">Sport</a>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </nav>
        </div>
      </React.Fragment>

    </>
  )
}
export default Navbar