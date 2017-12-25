import React from 'react';
import PropTypes from 'prop-types';
import LoadingHOC from '../../containers/loadingHOC';
import DetailListWrapper from './detailListWrapper';
import CharacterItem from './characterItem';
import ComicItem from './comicItem';
import SeriesItem from './seriesItem';
import CreatorItem from './creatorItem';

const SelectedEvent = ({
  data: {
    title,
    description,
    thumbnail: { path, extension },
    characters,
    series,
    comics,
    creators,
    urls,
  },
}) => {
  const CharacterList = characters.items
    .map((item, key) => <CharacterItem {...item} key={key} />);

  const ComicList = comics.items
    .map((item, key) => <ComicItem {...item} key={key} />);

  const SeriesList = series.items
    .map((item, key) => <SeriesItem {...item} key={key} />);

  const CreatorList = creators.items
    .map((item, key) => <CreatorItem {...item} key={key} />);

  const profileUrl = urls[0] && urls[0].url;
  const wikiUrl = urls[1] && urls[1].url;

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
              { profileUrl && <span><a href={profileUrl} target="_blank"> Profile </a></span> }
              { wikiUrl && <span>.<a href={wikiUrl} target="_blank"> Wiki </a></span> }
            </small>
          </p>
        </div>
        {
          characters.available > 0 && (
            <DetailListWrapper heading="Characters">
              { CharacterList }
            </DetailListWrapper>
          )
        }
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
          creators.available > 0 && (
            <DetailListWrapper heading="Creators">
              { CreatorList }
            </DetailListWrapper>
          )
        }
      </div>
    </article>
  );
};

SelectedEvent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      extension: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
    comics: PropTypes.arrayOf(PropTypes.object).isRequired,
    series: PropTypes.arrayOf(PropTypes.object).isRequired,
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    creators: PropTypes.arrayOf(PropTypes.object).isRequired,
    urls: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default LoadingHOC(SelectedEvent);
