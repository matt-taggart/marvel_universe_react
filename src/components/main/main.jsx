import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '../navigation/sidebar';

const Main = ({ children }) => (
  <div className="section">
    <div className="container">
      <div className="columns">
        <SideBar />
        <div className="column is-three-quarters">
          { children }
        </div>
      </div>
    </div>
  </div>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
