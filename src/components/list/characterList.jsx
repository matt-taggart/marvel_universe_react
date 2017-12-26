import React from 'react';
import LoadingHOC from '../../containers/loadingHOC';
import CharacterCard from '../cards/characterCard';

const CharacterList = ({ history, saveResource, showSaveItemErrorModal, data, isSignedIn }) => (
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
  </div>
);

export default LoadingHOC(CharacterList);
