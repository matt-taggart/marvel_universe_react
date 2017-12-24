import React from 'react';
import LoadingHOC from '../../containers/loadingHOC';
import EventCard from '../cards/eventCard';

const EventList = ({ item, history, saveResource, data }) => (
  <div className="columns is-multiline">
    { data.map(item => <EventCard {...item} history={history} saveResource={saveResource} key={item.id} />) }
  </div>
);

export default LoadingHOC(EventList);
