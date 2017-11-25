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
        <div className="navbar-item">
          { Object.keys(user.get('user')).length
            ? (
              <a className="title is-6">
                <span className="right-margin"><i className="fa fa-user" /></span>
                <span>{ user.get('user').name }</span>
              </a>
            )
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
