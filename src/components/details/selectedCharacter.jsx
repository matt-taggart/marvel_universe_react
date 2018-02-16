import React from 'react';
import PropTypes from 'prop-types';
import LoadingHOC from '../../containers/loadingHOC';
import DetailListWrapper from './detailListWrapper';
import ComicItem from './comicItem';
import SeriesItem from './seriesItem';
import EventItem from './eventItem';

const SelectedCharacter = ({
  data: {
    name,
    description,
    thumbnail: { path, extension },
    comics,
    series,
    events,
    urls,
  },
}) => {
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
          <div>
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
          </div>
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
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      extension: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
    comics: PropTypes.object.isRequired,
    series: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired,
    urls: PropTypes.array.isRequired,
  }).isRequired,
};

export default LoadingHOC(SelectedCharacter);
