import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterItem = ({ name, resourceURI }) => {
  const characterId = resourceURI.slice(resourceURI.lastIndexOf('/') + 1);
  return (
    <div className="btm-space">
      <div>{ name }</div>
      <small><Link to={`/characters/${characterId}`}>Details</Link></small>
    </div>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  resourceURI: PropTypes.string.isRequired,
};

export default CharacterItem;
