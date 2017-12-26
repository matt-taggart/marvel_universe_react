import React from 'react';
import LoadingHOC from '../../containers/loadingHOC';
import EventCard from '../cards/eventCard';

const EventList = ({ history, saveResource, showSaveItemErrorModal, data, isSignedIn }) => (
  <div className="columns is-multiline">
    { data.map(item => (
      <EventCard
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

export default LoadingHOC(EventList);
