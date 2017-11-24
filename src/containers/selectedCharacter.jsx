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

  const profileUrl = urls[0] && urls[0].url;
  const wikiUrl = urls[1] && urls[1].url;
  const comicUrl = urls[2] && urls[2].url;

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
            <br />
            <small>
              <em>Official Links:</em>
            </small>
            <br />
            <small>
              { profileUrl && <span><a href={profileUrl} target="_blank"> Profile </a></span> }
              { wikiUrl && <span>.<a href={wikiUrl} target="_blank"> Wiki </a></span> }
              { comicUrl && <span>.<a href={comicUrl} target="_blank"> Comics </a></span> }
            </small>
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
