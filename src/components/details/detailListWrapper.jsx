import React from 'react';
import PropTypes from 'prop-types';

const DetailListWrapper = ({ heading, children }) => (
  <article className="media">
    <div className="media-content">
      <div className="content">
        <div>
          <strong>{ heading }</strong>
          <br />
          { children }
        </div>
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
