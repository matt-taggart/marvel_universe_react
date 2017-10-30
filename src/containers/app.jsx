import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Nav from '../components/nav';
import Main from '../components/main';
import SignIn from '../components/signIn';
import Register from '../components/register';
import RegistrationSuccessful from '../components/registrationSuccessful';
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
const SelectedCharacterFromAPI = LoadingComponent(SelectedCharacter);

class App extends Component {
  componentDidCatch(error, info) {
    const { setApplicationError } = this.props;

    setApplicationError({ 
      error: error.message, 
      info: info.componentStack
    });
  }

  render() {
    const {
      getCharacters,
      getComics,
      getCreators,
      getEvents,
      getSelectedCharacter,
      characters,
      comics,
      creators,
      events,
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
              exact
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
              exact
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
              exact
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
                  {...props} 
                  selectedItem
                  apiCall={getSelectedCharacter} 
                  isLoading={display.get('loading')}
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
            <Redirect from="/" to="/characters" />
            <Redirect to="/" />
          </Switch>
        </Main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters,
  comics: state.comics,
  creators: state.creators,
  events: state.events,
  display: state.display,
  user: state.user,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(ApiActions, dispatch)
);

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps,
)(App));
