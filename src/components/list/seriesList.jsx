import React from 'react';
import LoadingHOC from '../../containers/loadingHOC';
import SeriesCard from '../cards/seriesCard';

const SeriesList = ({ history, saveResource, showSaveItemErrorModal, data, isSignedIn }) => (
  <div className="columns is-multiline">
    { data.map(item => (
      <SeriesCard
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

export default LoadingHOC(SeriesList);

