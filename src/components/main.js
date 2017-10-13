import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SideBar from './sidebar';
import Card from './card';
import fetchCharacters from '../sagas/characters';

class Main extends Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }
  render() {
    const { characters } = this.props;

    const characterCards = characters.get('characters')
      .map(character => <Card {...character} key={character.id} />);

    return (
      <div className="section">
        <div className="columns">
          <SideBar />
          <div className="column is-three-quarters">
            <div className="columns is-multiline">
              { characterCards }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  characters: PropTypes.object.isRequired,
  fetchCharacters: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  characters: state.characters,
});

const mapDispatchToProps = () => ({
  fetchCharacters,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
