import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CreatorItem = ({ name, resourceURI }) => {
  const creatorId = resourceURI.slice(resourceURI.lastIndexOf('/') + 1);
  return (
    <div className="level">
      <div className="level-left">
        <div className="level-item">{ name }</div>
        <small className="level-item">
          <Link to={`/creators/${creatorId}`}>Details</Link>
        </small>
      </div>
    </div>
  );
};

CreatorItem.propTypes = {
  name: PropTypes.string.isRequired,
  resourceURI: PropTypes.string.isRequired,
};

export default CreatorItem;
