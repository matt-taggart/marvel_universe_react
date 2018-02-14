import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SideBar = ({ currentPage }) => (
  <aside className="menu column is-one-quarter">
    <p className="menu-label">Browse</p>
    <ul className="menu-list">
      <li className={ currentPage === '/characters' ? 'has-text-weight-bold' : ''}>
        <Link to="/">Characters</Link>
      </li>
      <li className={ currentPage === '/comics' ? 'has-text-weight-bold' : ''}>
        <Link to="/comics">Comics</Link>
      </li>
      <li className={ currentPage === '/creators' ? 'has-text-weight-bold' : ''}>
        <Link to="/creators">Creators</Link>
      </li>
      <li className={ currentPage === '/events' ? 'has-text-weight-bold' : ''}>
        <Link to="/events">Events</Link>
      </li>
      <li className={ currentPage === '/series' ? 'has-text-weight-bold' : ''}>
        <Link to="/series">Series</Link>
      </li>
    </ul>
  </aside>
);

SideBar.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default SideBar;
