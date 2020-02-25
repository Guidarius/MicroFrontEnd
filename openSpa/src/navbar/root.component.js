import React from 'react'
const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a className="brand-logo">single-spa</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a>Home</a></li>
        <li><a>AngularJS</a></li>
      </ul>
    </div>
  </nav>
)
export default NavBar