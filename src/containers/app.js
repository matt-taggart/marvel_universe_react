import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Nav from '../components/nav';
import Main from '../components/main';
import CharacterCard from '../components/characterCard';
import ComicCard from '../components/comicCard';
import CreatorCard from '../components/creatorCard';
import EventCard from '../components/eventCard';
import LoadingComponent from '../components/loadingHOC';
import * as ApiActions from '../actions/api';
import SelectedCharacter from '../containers/selectedCharacter';

const CharacterListFromAPI = LoadingComponent(CharacterCard);
const ComicListFromAPI = LoadingComponent(ComicCard);
const CreatorListFromAPI = LoadingComponent(CreatorCard);
const EventListFromAPI = LoadingComponent(EventCard);

const App = ({
  getCharacters,
  getComics,
  getCreators,
  getEvents,
  getSelectedCharacter,
  characters,
  comics,
  creators,
  events,
  display,
  history,
}) => {

  return (
    <div>
      <Nav />
      <Main>
        <Switch>
          <Route
            path="/"
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
            path="/comics"
            render={() => (
              <ComicListFromAPI
                list={comics.get('comics')}
                apiCall={getComics}
                isLoading={display.get('loading')}
              />
            )}
          />
          <Route
            path="/creators"
            render={() => (
              <CreatorListFromAPI
                list={creators.get('creators')}
                apiCall={getCreators}
                isLoading={display.get('loading')}
              />
            )}
          />
          <Route
            path="/events"
            render={() => (
              <EventListFromAPI
                list={events.get('events')}
                apiCall={getEvents}
                isLoading={display.get('loading')}
              />
            )}
          />
          <Route
            path="/characters/:id"
            render={props => <SelectedCharacter  {...props} getSelectedCharacter={getSelectedCharacter} />}
          />
          <Redirect to="/" />
        </Switch>
      </Main>
    </div>
  );
};

const mapStateToProps = state => ({
  characters: state.characters,
  comics: state.comics,
  creators: state.creators,
  events: state.events,
  display: state.display,
});

const mapDispatchToProps = dispatch => bindActionCreators(ApiActions, dispatch);

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps,
)(App));
