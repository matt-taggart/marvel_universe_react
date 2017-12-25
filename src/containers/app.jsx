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
import CustomerProfile from '../components/profile/profile';
import CharacterList from '../components/list/characterList';
import ComicList from '../components/list/comicList';
import CreatorList from '../components/list/creatorList';
import EventList from '../components/list/eventList';
import SeriesList from '../components/list/seriesList';
import SelectedCharacter from '../components/details/selectedCharacter';
import SelectedComic from '../components/details/selectedComic';
import SelectedCreator from '../components/details/selectedCreator';
import SelectedEvent from '../components/details/selectedEvent';
import SelectedSeries from '../components/details/selectedSeries';
import * as ApiActions from '../actions/api';

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
      logout,
      getSelectedCharacter,
      getSelectedComic,
      getSelectedCreator,
      getSelectedEvent,
      getSelectedSeries,
      saveResource,
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
        <Nav
          history={history}
          user={user}
          logout={logout}
        />
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
                  getUser={getUser}
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
                <CharacterList
                  data={characters.get('characters')}
                  apiCall={getCharacters}
                  getUser={getUser}
                  isLoading={display.get('loading')}
                  history={history}
                  saveResource={saveResource}
                />
              )}
            />
            <Route
              path="/characters/:id"
              render={props => (
                <SelectedCharacter
                  data={characters.get('selectedCharacter')}
                  apiCall={getSelectedCharacter}
                  getUser={getUser}
                  match={props.match}
                  isLoading={display.get('loading')}
                />
              )}
            />
            <Route
              path="/comics"
              exact
              render={() => (
                <ComicList
                  data={comics.get('comics')}
                  apiCall={getComics}
                  getUser={getUser}
                  isLoading={display.get('loading')}
                  history={history}
                  saveResource={saveResource}
                />
              )}
            />
            <Route
              path="/comics/:id"
              render={props => (
                <SelectedComic
                  data={comics.get('selectedComic')}
                  apiCall={getSelectedComic}
                  getUser={getUser}
                  match={props.match}
                  isLoading={display.get('loading')}
                />
              )}
            />
            <Route
              path="/creators"
              exact
              render={() => (
                <CreatorList
                  data={creators.get('creators')}
                  apiCall={getCreators}
                  getUser={getUser}
                  isLoading={display.get('loading')}
                  history={history}
                  saveResource={saveResource}
                />
              )}
            />
            <Route
              path="/creators/:id"
              render={props => (
                <SelectedCreator
                  data={creators.get('selectedCreator')}
                  apiCall={getSelectedCreator}
                  getUser={getUser}
                  match={props.match}
                  isLoading={display.get('loading')}
                />
              )}
            />
            <Route
              path="/events"
              exact
              render={() => (
                <EventList
                  data={events.get('events')}
                  apiCall={getEvents}
                  getUser={getUser}
                  isLoading={display.get('loading')}
                  history={history}
                  saveResource={saveResource}
                />
              )}
            />
            <Route
              path="/events/:id"
              render={props => (
                <SelectedEvent
                  data={events.get('selectedEvent')}
                  apiCall={getSelectedEvent}
                  getUser={getUser}
                  match={props.match}
                  isLoading={display.get('loading')}
                />
              )}
            />
            <Route
              path="/series"
              exact
              render={() => (
                <SeriesList
                  data={series.get('series')}
                  apiCall={getSeries}
                  getUser={getUser}
                  isLoading={display.get('loading')}
                  history={history}
                  saveResource={saveResource}
                />
              )}
            />
            <Route
              path="/series/:id"
              exact
              render={props => (
                <SelectedSeries
                  data={series.get('selectedSeries')}
                  apiCall={getSelectedSeries}
                  getUser={getUser}
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
  logout: PropTypes.func.isRequired,
  getSelectedCharacter: PropTypes.func.isRequired,
  getSelectedComic: PropTypes.func.isRequired,
  getSelectedCreator: PropTypes.func.isRequired,
  getSelectedEvent: PropTypes.func.isRequired,
  getSelectedSeries: PropTypes.func.isRequired,
  saveResource: PropTypes.func.isRequired,
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
    mapDispatchToProps,
  )(App)
);
