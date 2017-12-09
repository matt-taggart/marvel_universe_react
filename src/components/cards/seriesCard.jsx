import React from 'react';
import PropTypes from 'prop-types';

const SeriesCard = ({
  id,
  title,
  description,
  thumbnail: { path, extension },
  history,
}) => {
  const selectSeries = () => history.push(`/series/${id}`);
  return (
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
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon is-small right-margin-5">
                    <i className="fa fa-bookmark" />
                  </span>
                  <span className="is-small">Save</span>
                </a>
                <a className="level-item">
                  <span className="icon is-small right-margin-5">
                    <i className="fa fa-info-circle" />
                  </span>
                  <span className="is-small" role="presentation" onClick={selectSeries}>
                    Details
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  );
};

SeriesCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    extension: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.object.isRequired,
};

export default SeriesCard;

