import React from 'react';
import LoadingHOC from '../../containers/loadingHOC';
import CharacterCard from '../cards/characterCard';

const CharacterList = ({ item, history, saveResource, data }) => (
  <div className="columns is-multiline">
    { data.map(item => <CharacterCard {...item} history={history} saveResource={saveResource} key={item.id} />) }
  </div>
);

export default LoadingHOC(CharacterList);
