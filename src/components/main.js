import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SideBar from './sidebar';

const Main = ({ children }) => (
  <div className="section">
    <div className="container">
      <div className="columns">
        <SideBar />
        <div className="column is-three-quarters">
          { children }
        </div>
      </div>
    </div>
  </div>
);

export default Main;

// Main.propTypes = {
//   characters: PropTypes.object.isRequired,
//   display: PropTypes.object.isRequired,
//   fetchCharacters: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   characters: state.characters,
//   display: state.display,
// });

// const mapDispatchToProps = () => ({
//   fetchCharacters,
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Main);
