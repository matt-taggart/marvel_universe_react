import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EventItem = ({ name, resourceURI }) => {
  const eventId = resourceURI.slice(resourceURI.lastIndexOf('/') + 1);
  return (
    <div className="level">
      <div className="level-left">
        <div className="level-item center-mobile">{ name }</div>
        <small className="level-item">
          <Link to={`/events/${eventId}`}>Details</Link>
        </small>
      </div>
    </div>
  );
};

EventItem.propTypes = {
  name: PropTypes.string.isRequired,
  resourceURI: PropTypes.string.isRequired,
};

export default EventItem;
