import React from 'react';
import PropTypes from 'prop-types';

const DetailListWrapper = ({ heading, children }) => (
  <article className="media">
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{ heading }</strong>
          <br />
          { children }
        </p>
      </div>
    </div>
  </article>
);

DetailListWrapper.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default DetailListWrapper;
