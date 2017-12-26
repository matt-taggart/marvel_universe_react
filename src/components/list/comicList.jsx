import React from 'react';
import LoadingHOC from '../../containers/loadingHOC';
import ComicCard from '../cards/comicCard';

const ComicList = ({ history, saveResource, showSaveItemErrorModal, data, isSignedIn }) => (
  <div className="columns is-multiline">
    { data.map(item => (
      <ComicCard
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

export default LoadingHOC(ComicList);

