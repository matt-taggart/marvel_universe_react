import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EventItem = ({ name, resourceURI }) => {
  const eventId = resourceURI.slice(resourceURI.lastIndexOf('/') + 1);
  return (
    <div className="btm-space">
      <div>{ name }</div>
      <small><Link to={`/events/${eventId}`}>Details</Link></small>
    </div>
  );
};

EventItem.propTypes = {
  name: PropTypes.string.isRequired,
  resourceURI: PropTypes.string.isRequired,
};

export default EventItem;
