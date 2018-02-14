import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingHOC from '../../containers/loadingHOC';

const CustomerProfile = ({ data: { name, email, gender, age, savedData } }) => {
  const savedCharacters = savedData.characters && savedData.characters.map(({ id, name }) => (
    <div className="flex-center">
      <div className="r-mar">{ name }</div>
      <small style={{ display: 'block' }}>
        <Link to={`/characters/${id}`}>Details</Link>
      </small>
    </div>
  ));
  
  const savedComics = savedData.comics && savedData.comics.map(({ id, name }) => (
    <div className="flex-center">
      <div className="r-mar">{ name }</div>
      <small style={{ display: 'block' }}>
        <Link to={`/comics/${id}`}>Details</Link>
      </small>
    </div>
  ));

  const savedCreators = savedData.creators && savedData.creators.map(({ id, name }) => (
    <div className="flex-center">
      <div className="r-mar">{ name }</div>
      <small style={{ display: 'block' }}>
        <Link to={`/creators/${id}`}>Details</Link>
      </small>
    </div>
  ));

  const savedEvents = savedData.events && savedData.events.map(({ id, name }) => (
    <div className="flex-center">
      <div className="r-mar">{ name }</div>
      <small style={{ display: 'block' }}>
        <Link to={`/events/${id}`}>Details</Link>
      </small>
    </div>
  ));

  const savedSeries = savedData.series && savedData.series.map(({ id, name }) => (
    <div className="flex-center">
      <div className="r-mar">{ name }</div>
      <small style={{ display: 'block' }}>
        <Link to={`/series/${id}`}>Details</Link>
      </small>
    </div>
  ));


  return (
    <div className="Profile">
      <h1 className="has-text-centered is-size-3">My Profile</h1>
      <div className="has-text-centered main-profile-content">
        <i className="fa fa-user-circle fa-5x" aria-hidden="true" />
        <div>
          <span><em>Username:</em></span>
          <span>{ name }</span>
        </div>
        <div>
          <span><em>Email:</em></span>
          <span>{ email }</span>
        </div>
        <div>
          <span><em>Gender:</em></span>
          <span>{ gender }</span>
        </div>
        <div>
          <span><em>Age:</em></span>
          <span>{ age }</span>
        </div>
      </div>
      <article className="media">
        <div className="media-content">
          <div className="content">
            <div>
              <br />
              { savedCharacters && savedCharacters.length > 0 && (
                <div className="saved-content">
                  <h5 className="has-text-centered"><em>Saved Characters</em></h5>
                  { savedCharacters }
                </div>
              )}
              { savedComics && savedComics.length > 0 && (
                <div className="saved-content">
                  <h5 className="has-text-centered"><em>Saved Comics</em></h5>
                  { savedComics }
                </div>
              )}
              { savedCreators && savedCreators.length > 0 && (
                <div className="saved-content">
                  <h5 className="has-text-centered"><em>Saved Creators</em></h5>
                  { savedCreators }
                </div>
              )}
              { savedEvents && savedEvents.length > 0 && (
                <div className="saved-content">
                  <h5 className="has-text-centered"><em>Saved Events</em></h5>
                  { savedEvents }
                </div>
              )}
              { savedSeries && savedSeries.length > 0 && (
                <div className="saved-content">
                  <h5 className="has-text-centered"><em>Saved Series</em></h5>
                  { savedSeries }
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

CustomerProfile.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.arrayOf(PropTypes.object).isRequired,
    age: PropTypes.arrayOf(PropTypes.object).isRequired,
    savedData: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};


export default LoadingHOC(CustomerProfile);
