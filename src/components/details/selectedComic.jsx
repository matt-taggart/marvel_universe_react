import React from 'react';
import PropTypes from 'prop-types';
import DetailListWrapper from './detailListWrapper';
import CreatorItem from './creatorItem';
import CharacterItem from './characterItem';
import SeriesItem from './seriesItem';
import EventItem from './eventItem';

const SelectedComic = ({
  title,
  description,
  thumbnail: { path, extension },
  creators,
  characters,
  series,
  events,
  urls,
}) => {
  const CreatorList = creators.items
    .map((item, key) => <CreatorItem {...item} key={key} />);

  const CharacterList = characters.items
    .map((item, key) => <CharacterItem {...item} key={key} />);

  const EventList = events.items
    .map((item, key) => <EventItem {...item} key={key} />);

  const seriesUrl = urls[0] && urls[0].url;
  const comicsUrl = urls[1] && urls[1].url;

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
            <strong>{ title }</strong>
            <br />
            { description || 'Description not available' }
            <br />
            <br />
            <small>
              <em>Official Links:</em>
            </small>
            <br />
            <small>
              { seriesUrl && <span><a href={seriesUrl} target="_blank"> Series </a></span> }
              { comicsUrl && <span>.<a href={comicsUrl} target="_blank"> Comic </a></span> }
            </small>
          </p>
        </div>
        <DetailListWrapper heading="Series">
          <SeriesItem
            name={series.name}
            resourceURI={series.resourceURI}
          />
        </DetailListWrapper>
        {
          creators.available > 0 && (
            <DetailListWrapper heading="Creators">
              { CreatorList }
            </DetailListWrapper>
          )
        }
        {
          characters.available > 0 && (
            <DetailListWrapper heading="Characters">
              { CharacterList }
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

SelectedComic.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    extension: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  creators: PropTypes.arrayOf(PropTypes.object).isRequired,
  series: PropTypes.arrayOf(PropTypes.object).isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  urls: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SelectedComic;
