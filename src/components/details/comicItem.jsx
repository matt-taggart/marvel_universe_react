import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ComicItem = ({ name, resourceURI }) => {
  const comicId = resourceURI.slice(resourceURI.lastIndexOf('/') + 1);
  return (
    <div className="btm-space">
      <div>{ name }</div>
      <small><Link to={`/comics/${comicId}`}>Details</Link></small>
    </div>
  );
};

ComicItem.propTypes = {
  name: PropTypes.string.isRequired,
  resourceURI: PropTypes.string.isRequired,
};

export default ComicItem;
