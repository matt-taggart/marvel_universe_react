import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SideBar from './sidebar';
import CharacterCard from './characterCard';
import LoadingComponent from './loadingHOC';
import fetchCharacters from '../sagas/characters';

class Main extends Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }
  render() {
    const { characters, display } = this.props;
    const CharacterListFromAPI = LoadingComponent(CharacterCard);

    return (
      <div className="section">
        <div className="container">
          <div className="columns">
            <SideBar />
            <div className="column is-three-quarters">
              <CharacterListFromAPI
                isLoading={display.get('loading')}              
                list={characters.get('characters')}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  characters: PropTypes.object.isRequired,
  display: PropTypes.object.isRequired,
  fetchCharacters: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  characters: state.characters,
  display: state.display,
});

const mapDispatchToProps = () => ({
  fetchCharacters,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
