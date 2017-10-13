import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../components/nav';
import Main from '../components/main';
import CharacterCard from '../components/characterCard';
import LoadingComponent from '../components/loadingHOC';
import fetchCharacters from '../sagas/characters';

const App = ({
  characters,
  display,
}) => {
  const CharacterListFromAPI = LoadingComponent(CharacterCard);

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
                apiCall={fetchCharacters}
                isLoading={display.get('loading')}
              />
            )}
          />
        </Switch>
      </Main>
    </div>
  );
};

const mapStateToProps = state => ({
  characters: state.characters,
  display: state.display,
});

export default connect(
  mapStateToProps,
)(App);
