import React from 'react';
import PropTypes from 'prop-types';
import DetailListWrapper from '../components/detailListWrapper';
import ListItem from '../components/listItem';

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
    .map((item, key) => <ListItem {...item} key={key} />);

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
          series.available > 0 && (
            <DetailListWrapper>
              { SeriesList }
            </DetailListWrapper>
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
