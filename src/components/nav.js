import React from 'react';

const Nav = () => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item">
        <h1 className="title is-3">Marvel Universe</h1>
      </div>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <a className="title is-6">Sign In</a>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
