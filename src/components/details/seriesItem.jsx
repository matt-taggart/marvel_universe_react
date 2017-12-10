import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SeriesItem = ({ name, resourceURI }) => {
  const seriesId = resourceURI.slice(resourceURI.lastIndexOf('/') + 1);
  return (
    <div className="level">
      <div className="level-left">
        <div className="level-item center-mobile">{ name }</div>
        <small className="level-item">
          <Link to={`/series/${seriesId}`}>Details</Link>
        </small>
      </div>
    </div>
  );
};

SeriesItem.propTypes = {
  name: PropTypes.string.isRequired,
  resourceURI: PropTypes.string.isRequired,
};

export default SeriesItem;
