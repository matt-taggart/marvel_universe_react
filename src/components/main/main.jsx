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
    {/* <article className="message is-success" style={{ position: 'fixed', top: '40px', right: '35px' }}>
      <div className="message-body">
        Item successfully added.
      </div>
    </article> */}
  </div>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
