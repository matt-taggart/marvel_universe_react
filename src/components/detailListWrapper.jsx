import React from 'react';
import PropTypes from 'prop-types';

const DetailListWrapper = ({ children }) => (
  <article className="media">
    <div className="media-content">
      <div className="content">
        <p>
          <strong>Series</strong>
          <br />
          { children }
        </p>
      </div>
    </div>
  </article>
);

DetailListWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default DetailListWrapper;