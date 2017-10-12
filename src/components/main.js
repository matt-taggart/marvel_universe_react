import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from './sidebar';
import Card from './card';
import fetchCharacters from '../sagas/characters';

class Main extends Component {
  componentDidMount () {
    this.props.fetchCharacters();
  }
  render() {
    // const { characters } = this.props;

    // const characterCards = characters.get('characters')
    //   .map(character => {
        
    //   })
    return (
      <div className="section">
        <div className="columns">
          <SideBar />
          <div className="column is-three-quarters">
            <div className="columns is-multiline">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: () => fetchCharacters()
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
