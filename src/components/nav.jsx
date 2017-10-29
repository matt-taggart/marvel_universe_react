import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ user }) => (
  <nav className="navbar is-dark" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item">
        <h1 className="title is-3">Marvel Universe</h1>
      </div>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          { Object.keys(user.get('user')).length
            ? <a className="title is-6">User</a>
            : <Link to="sign-in" className="title is-6">Sign In</Link>
          }
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
