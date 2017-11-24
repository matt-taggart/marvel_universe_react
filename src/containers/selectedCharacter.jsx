import React from 'react';
import PropTypes from 'prop-types';
import SeriesItem from '../components/seriesItem';

const SelectedCharacter = ({
  name,
  description,
  thumbnail: { path, extension },
  comics,
  series,
  stories,
  urls,
}) => {
// NOTE: Usually want to provide unique key rather than array index
// when composing a list of components, but Marvel API doesn't provide one :(

  const SeriesList = series.items
    .map((item, key) => <SeriesItem {...item} key={key} />);

  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={`${path}.${extension}`} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{ name }</strong>
            <br />
            { description || 'Description not available' }
            <br />
          </p>
        </div>
        {
          series.available > 1 && (
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Series</strong>
                    <br />
                    { SeriesList }
                  </p>
                </div>
              </div>
            </article>
          )
        }
      </div>
    </article>
  );
};

SelectedCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    extension: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  comics: PropTypes.arrayOf(PropTypes.object).isRequired,
  series: PropTypes.arrayOf(PropTypes.object).isRequired,
  stories: PropTypes.arrayOf(PropTypes.object).isRequired,
  urls: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default SelectedCharacter;
