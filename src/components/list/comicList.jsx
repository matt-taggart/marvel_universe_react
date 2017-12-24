import React from 'react';
import LoadingHOC from '../../containers/loadingHOC';
import ComicCard from '../cards/comicCard';

const ComicList = ({ item, history, saveResource, data }) => (
  <div className="columns is-multiline">
    { data.map(item => <ComicCard {...item} history={history} saveResource={saveResource} key={item.id} />) }
  </div>
);

export default LoadingHOC(ComicList);

