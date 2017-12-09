import React from 'react';
import PropTypes from 'prop-types';

const CreatorCard = ({ 
  id,
  fullName,
  comics: { items },
  thumbnail: { path, extension },
  history,
}) => {
  const selectCreator = () => history.push(`/creators/${id}`);
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
                <strong>{ fullName }</strong>
                <br />
              </p>
              { items.length ? <p><em>Comics:</em></p> : null }
              { items.map(comic => <p>{ comic.name }</p>) }
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon is-small r-mar-5">
                    <i className="fa fa-bookmark" />
                  </span>
                  <span className="is-small">Save</span>
                </a>
                <a className="level-item">
                  <span className="icon is-small r-mar-5">
                    <i className="fa fa-info-circle" />
                  </span>
                  <span className="is-small" role="presentation" onClick={selectCreator}>Details</span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  );
};

CreatorCard.propTypes = {
  id: PropTypes.number.isRequired,
  fullName: PropTypes.string.isRequired,
  comics: PropTypes.shape({
    items: PropTypes.array.isRequired,
  }).isRequired,
  thumbnail: PropTypes.shape({
    extension: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.object.isRequired,
};

export default CreatorCard;
