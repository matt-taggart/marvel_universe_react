import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import Nav from '../components/navigation/nav';
import Main from '../components/main/main';
import SignIn from '../components/forms/signIn';
import Register from '../components/forms/register';
import RegistrationSuccessful from '../components/misc/registrationSuccessful';
import Profile from '../components/profile/profile.jsx';
import CharacterCard from '../components/cards/characterCard';
import ComicCard from '../components/cards/comicCard';
import CreatorCard from '../components/cards/creatorCard';
import EventCard from '../components/cards/eventCard';
import SeriesCard from '../components/cards/seriesCard';
import SelectedCharacter from '../components/details/selectedCharacter';
import SelectedComic from '../components/details/selectedComic';
import SelectedCreator from '../components/details/selectedCreator';
import SelectedEvent from '../components/details/selectedEvent';
import SelectedSeries from '../components/details/selectedSeries';
import LoadingListComponent from './loadingListHOC';
import LoadingItemComponent from './loadingItemHOC';
import * as ApiActions from '../actions/api';

const CharacterListFromAPI = LoadingListComponent(CharacterCard);
const ComicListFromAPI = LoadingListComponent(ComicCard);
const CreatorListFromAPI = LoadingListComponent(CreatorCard);
const EventListFromAPI = LoadingListComponent(EventCard);
const SeriesListFromAPI = LoadingListComponent(SeriesCard);
const SelectedCharacterFromAPI = LoadingItemComponent(SelectedCharacter);
const CustomerProfile = LoadingItemComponent(Profile);
const SelectedComicFromAPI = LoadingItemComponent(SelectedComic);
const SelectedCreatorFromAPI = LoadingItemComponent(SelectedCreator);
const SelectedEventFromAPI = LoadingItemComponent(SelectedEvent);
const SelectedSeriesFromAPI = LoadingItemComponent(SelectedSeries);

class App extends Component {
  componentWillReceiveProps(nextProps) {
    const { location, clearApiErrors } = this.props;

    if (location.pathname !== nextProps.location.pathname) {
      clearApiErrors();
    }
  }

  componentDidCatch(error, info) {
    const { setApplicationError } = this.props;

    setApplicationError({
      error: error.message,
      info: info.componentStack,
    });
  }

  render() {
    const {
      getCharacters,
      getComics,
      getCreators,
      getEvents,
      getSeries,
      getUser,
      getSelectedCharacter,
      getSelectedComic,
      getSelectedCreator,
      getSelectedEvent,
      getSelectedSeries,
      characters,
      comics,
      creators,
      events,
      series,
      user,
      display,
      history,
      signIn,
      register,
    } = this.props;

    return (
      <div>
        <Nav history={history} user={user} />
        <Main>
          <Switch>
            <Route
              path="/sign-in"
              render={() => (
                <SignIn
                  signIn={signIn}
                  display={display}
                  isLoading={display.get('loading')}
                />
              )}
            />
            <Route
              path="/register"
              render={() => (
                <Register
                  register={register}
                  display={display}
                  isLoading={display.get('loading')}
                  history={history}
                />
              )}
            />
            <Route
              path="/profile"
              render={() => (
                <CustomerProfile
                  data={user.get('user')}
                  apiCall={getUser}
                  isLoading={display.get('loading')}
                  history={history}
                />
              )}
            />
            <Route
              path="/registration-successful"
              render={() => (
                <RegistrationSuccessful
                  user={user}
                />
              )}
            />
            <Route
              path="/characters"
              exact
              render={() => (
                <CharacterListFromAPI
                  list={characters.get('characters')}
                  apiCall={getCharacters}
                  isLoading={display.get('loading')}
                  history={history}
                />
              )}
            />
            <Route
              path="/characters/:id"
              render={props => (
                <SelectedCharacterFromAPI
                  data={characters.get('selectedCharacter')}
                  apiCall={getSelectedCharacter}
                  match={props.match}
                  isLoading={display.get('loading')}
                />
              )}
            />
            <Route
              path="/comics"
              exact
              render={() => (
                <ComicListFromAPI
                  list={comics.get('comics')}
                  apiCall={getComics}
                  isLoading={display.get('loading')}
                  history={history}
                />
              )}
            />
            <Route
              path="/comics/:id"
              render={props => (
                <SelectedComicFromAPI
                  data={comics.get('selectedComic')}
                  apiCall={getSelectedComic}
                  match={props.match}
                  isLoading={display.get('loading')}
                />
              )}
            />
            <Route
              path="/creators"
              exact
              render={() => (
                <CreatorListFromAPI
                  list={creators.get('creators')}
                  apiCall={getCreators}
                  isLoading={display.get('loading')}
                  history={history}
                />
              )}
            />
            <Route
              path="/creators/:id"
              render={props => (
                <SelectedCreatorFromAPI
                  data={creators.get('selectedCreator')}
                  apiCall={getSelectedCreator}
                  match={props.match}
                  isLoading={display.get('loading')}
                />
              )}
            />
            <Route
              path="/events"
              exact
              render={() => (
                <EventListFromAPI
                  list={events.get('events')}
                  apiCall={getEvents}
                  isLoading={display.get('loading')}
                  history={history}
                />
              )}
            />
            <Route
              path="/events/:id"
              render={props => (
                <SelectedEventFromAPI
                  data={events.get('selectedEvent')}
                  apiCall={getSelectedEvent}
                  match={props.match}
                  isLoading={display.get('loading')}
                />
              )}
            />
            <Route
              path="/series"
              exact
              render={() => (
                <SeriesListFromAPI
                  list={series.get('series')}
                  apiCall={getSeries}
                  isLoading={display.get('loading')}
                  history={history}
                />
              )}
            />
            <Route
              path="/series/:id"
              exact
              render={props => (
                <SelectedSeriesFromAPI
                  data={series.get('selectedSeries')}
                  apiCall={getSelectedSeries}
                  match={props.match}
                  isLoading={display.get('loading')}
                />
              )}
            />
            <Redirect from="/" to="/characters" />
            <Redirect to="/" />
          </Switch>
        </Main>
      </div>
    );
  }
}

App.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  getComics: PropTypes.func.isRequired,
  getCreators: PropTypes.func.isRequired,
  getEvents: PropTypes.func.isRequired,
  getSeries: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  getSelectedCharacter: PropTypes.func.isRequired,
  getSelectedComic: PropTypes.func.isRequired,
  getSelectedCreator: PropTypes.func.isRequired,
  getSelectedEvent: PropTypes.func.isRequired,
  getSelectedSeries: PropTypes.func.isRequired,
  characters: PropTypes.instanceOf(Immutable.Map).isRequired,
  comics: PropTypes.instanceOf(Immutable.Map).isRequired,
  creators: PropTypes.instanceOf(Immutable.Map).isRequired,
  events: PropTypes.instanceOf(Immutable.Map).isRequired,
  user: PropTypes.instanceOf(Immutable.Map).isRequired,
  display: PropTypes.instanceOf(Immutable.Map).isRequired,
  series: PropTypes.instanceOf(Immutable.Map).isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  setApplicationError: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  clearApiErrors: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  characters: state.characters,
  comics: state.comics,
  creators: state.creators,
  events: state.events,
  display: state.display,
  user: state.user,
  series: state.series,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(ApiActions, dispatch)
);

export default withRouter(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  )(App)
);
