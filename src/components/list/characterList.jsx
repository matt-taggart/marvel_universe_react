import React from 'react';
import PropTypes from 'prop-types';
import LoadingHOC from '../../containers/loadingHOC';
import CharacterCard from '../cards/characterCard';
import Search from '../search';

const CharacterList = ({ history, saveResource, showSaveItemErrorModal, data, isSignedIn }) => [
  <Search placeholder="Search characters" />,
  <div className="columns is-multiline">
    { data.map(item => (
      <CharacterCard
        {...item}
        history={history}
        saveResource={saveResource}
        showSaveItemErrorModal={showSaveItemErrorModal}
        isSignedIn={isSignedIn}
        key={item.id}
      />
    )) }
  </div>,
];

CharacterList.propTypes = {
  history: PropTypes.object.isRequired,
  saveResource: PropTypes.func.isRequired,
  showSaveItemErrorModal: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
};

export default LoadingHOC(CharacterList);
