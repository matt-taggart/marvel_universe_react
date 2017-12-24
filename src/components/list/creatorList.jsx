import React from 'react';
import LoadingHOC from '../../containers/loadingHOC';
import CreatorCard from '../cards/creatorCard';

const CreatorList = ({ item, history, saveResource, data }) => (
  <div className="columns is-multiline">
    { data.map(item => <CreatorCard {...item} history={history} saveResource={saveResource} key={item.id} />) }
  </div>
);

export default LoadingHOC(CreatorList);
