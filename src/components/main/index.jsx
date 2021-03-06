import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '../navigation/sidebar';

const Main = ({ children, displayFlashMessage, hideFlashMessage, currentPage }) => {
  const flashMessageClasses = displayFlashMessage
    ? 'message flash-message is-success fadeIn'
    : 'message hide-flash-message flash-message is-success';

  if (displayFlashMessage) {
    setTimeout(() => {
      hideFlashMessage();
    }, 3000);
  }

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <SideBar currentPage={currentPage} />
          <div className="column is-three-quarters">
            { children }
          </div>
        </div>
      </div>
      <article className={flashMessageClasses}>
        <div className="message-body">
          Item successfully added.
        </div>
      </article>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired,
  displayFlashMessage: PropTypes.bool.isRequired,
  hideFlashMessage: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default Main;
