import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export const PageWrapper = (props) => {
  return (
    <div>
      {/* <nav className="navbar">PageWrapper: create navbar here</nav> */}
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo}/>
          </Link>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMain">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarMain" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>

            <Link className="navbar-item" to="apps">
              Apps
            </Link>

            <Link className="navbar-item" to="app-stack">
              App Stack
            </Link>
          </div>
        </div>
      </nav>

      {props.children}
    </div>
  )
}