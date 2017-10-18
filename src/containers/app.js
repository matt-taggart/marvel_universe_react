import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../components/nav';
import Main from '../components/main';
import CharacterCard from '../components/characterCard';
import ComicCard from '../components/comicCard';
import LoadingComponent from '../components/loadingHOC';
import { GET_CHARACTERS } from '../constants/characters';
import { GET_COMICS } from '../constants/comics';

const CharacterListFromAPI = LoadingComponent(CharacterCard);
const ComicListFromAPI = LoadingComponent(ComicCard);

const App = ({
  getCharacters,
  getComics,
  characters,
  comics,
  display,
  location,
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
          <Redirect to="/" />
        </Switch>
      </Main>
    </div>
  );
};

const mapStateToProps = state => ({
  characters: state.characters,
  comics: state.comics,
  display: state.display,
});

const mapDispatchToProps = dispatch => ({
  getCharacters: () => dispatch({ type: GET_CHARACTERS }),
  getComics: () => dispatch({ type: GET_COMICS }),
});

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps,
)(App));

