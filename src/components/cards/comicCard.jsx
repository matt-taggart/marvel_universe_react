import React from 'react';
import PropTypes from 'prop-types';

const ComicCard = ({
  id,
  title,
  issueNumber,
  series: { name },
  prices,
  thumbnail: { path, extension },
}) => (
  <div className="column is-half ComicCard">
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
            </p>
            <p>Series: <em>{name}</em></p>
            <p>Issue Number: <em>{issueNumber}</em></p>
            <p>Print Price: <em>${prices[0].price}</em></p>
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

ComicCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  issueNumber: PropTypes.number.isRequired,
  series: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  prices: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.string.isRequired,
  })).isRequired,
  thumbnail: PropTypes.shape({
    extension: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default ComicCard;

