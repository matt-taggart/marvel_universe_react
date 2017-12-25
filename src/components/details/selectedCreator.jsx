import React from 'react';
import PropTypes from 'prop-types';
import LoadingHOC from '../../containers/loadingHOC';
import DetailListWrapper from './detailListWrapper';
import ComicItem from './comicItem';
import SeriesItem from './seriesItem';
import EventItem from './eventItem';

const SelectedCreator = ({
  data: {
    fullName,
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
            <strong>{ fullName }</strong>
            <br />
            <small>
              <em>Official Links:</em>
            </small>
            <br />
            <small>
              { profileUrl && <span><a href={profileUrl} target="_blank"> Profile </a></span> }
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

SelectedCreator.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      extension: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
    comics: PropTypes.arrayOf(PropTypes.object).isRequired,
    series: PropTypes.arrayOf(PropTypes.object).isRequired,
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
    urls: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default LoadingHOC(SelectedCreator);
