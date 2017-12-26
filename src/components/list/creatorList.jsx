import React from 'react';
import LoadingHOC from '../../containers/loadingHOC';
import CreatorCard from '../cards/creatorCard';

const CreatorList = ({ history, saveResource, showSaveItemErrorModal, data, isSignedIn }) => (
  <div className="columns is-multiline">
    { data.map(item => (
      <CreatorCard
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

export default LoadingHOC(CreatorList);
