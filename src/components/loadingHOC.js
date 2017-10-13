import React from 'react';
import LoadingSpinner from './loadingSpinner';

export default Component => ({ isLoading, list }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="columns is-multiline">
      { list.map(item => <Component {...item} key={item.id} />) }
    </div>
  );
};
