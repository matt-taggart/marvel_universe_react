import React from 'react';
import PropTypes from 'prop-types';
import DetailListWrapper from '../components/detailListWrapper';
import ComicItem from '../components/comicItem';
import SeriesItem from '../components/seriesItem';
import EventItem from '../components/eventItem';

const SelectedCharacter = ({
  name,
  description,
  thumbnail: { path, extension },
  comics,
  series,
  events,
  urls,
}) => {
// NOTE: Usually want to provide unique key rather than array index
// when composing a list of components, but Marvel API doesn't provide one :( 

  const ComicList = comics.items
    .map((item, key) => <ComicItem {...item} key={key} />);

  const SeriesList = series.items
    .map((item, key) => <SeriesItem {...item} key={key} />);

  const EventList = events.items
    .map((item, key) => <EventItem {...item} key={key} />);

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
          comics.available > 0 && (
            <DetailListWrapper heading="Comics">
              { ComicList }
            </DetailListWrapper>
          )
        }
        {
          series.available > 0 && (
            <DetailListWrapper heading="Series">
              { SeriesList }
            </DetailListWrapper>
          )
        }
        {
          events.available > 0 && (
            <DetailListWrapper heading="Events">
              { EventList }
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
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  urls: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SelectedCharacter;
