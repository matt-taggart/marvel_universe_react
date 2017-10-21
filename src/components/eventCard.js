import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const EventCard = ({ id, title, description, start, end, thumbnail: { path, extension } }) => (
  <div className="column is-half">
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={`${path}.${extension}`} alt="http://bulma.io/images/placeholders/128x128.png" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{ title }</strong>
              <br />
              { description || 'No description available.' }
            </p>
            <p>Start: <em>{ moment(start).format('dddd, MMMM Do YYYY') }</em></p>
            <p>End: <em>{ moment(end).format('dddd, MMMM Do YYYY') }</em></p>  
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small" style={{ marginRight: '5px' }}>
                  <i className="fa fa-bookmark" />
                </span>
                <span className="is-small">Save</span>
              </a>
              <a className="level-item">
                <span className="icon is-small" style={{ marginRight: '5px' }}>
                  <i className="fa fa-info-circle" />
                </span>
                <span className="is-small">Details</span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
);

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    extension: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;

