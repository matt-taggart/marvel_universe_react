import React from 'react';
import LoadingHOC from '../../containers/loadingHOC';
import SeriesCard from '../cards/seriesCard';

const SeriesList = ({ item, history, saveResource, data }) => (
  <div className="columns is-multiline">
    { data.map(item => <SeriesCard {...item} history={history} saveResource={saveResource} key={item.id} />) }
  </div>
);

export default LoadingHOC(SeriesList);

