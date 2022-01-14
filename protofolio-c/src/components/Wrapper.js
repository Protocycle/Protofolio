import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export const Wrapper = (props) => {
  const [hamburgerIsActive, setHamburgerActive] = useState("");
  const links = [{
    id: "home",
    name: "Home",
    to: "/home",
  },
  {
    id: "about",
    name: "About",
    to: "/about",
  },
  {
    id: "apps",
    name: "Apps",
    to: "/apps",
  },
  {
    id: "app-stack",
    name: "App Stack",
    to: "/app-stack",
  }
  ];
  const [activeLink, setActiveLink] = useState(window.location.pathname.split("/")[1].toLowerCase());

  const activateHamburger = () => {
    if (hamburgerIsActive)
      setHamburgerActive("");
    else setHamburgerActive("is-active");
  }

  return (
    <section id="main" className="hero background-image is-fullheight">
      <div className="hero-head">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/home" onClick={() => setActiveLink("home")}>
              <img src={logo} />
            </Link>

            <a role="button" onClick={activateHamburger} className={`navbar-burger ${hamburgerIsActive}`} aria-label="menu" aria-expanded="false" data-target="navbarMain">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarMain" className={`navbar-menu ${hamburgerIsActive}`}>
            <div className="navbar-start">
              {links.map(link => {
                return (
                  <Link key={link.id} to={link.to} className={"border-radius-2 navbar-item" + (link.id === activeLink ? " active" : " text-white")} onClick={() => setActiveLink(link.id)}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        {props.children}
      </div>
    </section>
  )
}