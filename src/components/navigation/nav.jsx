import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Immutable from 'immutable';

const Nav = ({ user }) => (
  <nav className="navbar is-dark" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item">
        <h1 className="title is-3"><Link to="/">Marvel Universe</Link></h1>
      </div>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          { user.get('signedIn') && Object.keys(user.get('user')).length
            ? ([
              <a className="navbar-link">
                <span className="r-mar"><i className="fa fa-user" /></span>
                <span>{ user.get('user').name }</span>
              </a>,
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="/documentation/overview/start/">
                  Home
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                  Profile
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                  Logout
                </a>
              </div>,
            ])
            : <Link to="/sign-in" className="title is-6">Sign In</Link>
          }
        </div>
      </div>
    </div>
  </nav>
);

Nav.propTypes = {
  user: PropTypes.instanceOf(Immutable.Map).isRequired,
};

export default Nav;
