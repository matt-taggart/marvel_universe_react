import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => (
  <aside className="menu column is-one-quarter">
    <p className="menu-label">Browse</p>
    <ul className="menu-list">
      <li><Link to="/">Characters</Link></li>
      <li><Link to="/comics">Comics</Link></li>
      <li><Link to="/creators">Creators</Link></li>
      <li><Link to="/events">Events</Link></li>
    </ul>
  </aside>
);

export default SideBar;
