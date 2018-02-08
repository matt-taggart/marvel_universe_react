import React from 'react';
import LoadingSpinner from '../components/misc/loadingSpinner';

const LoadingHOC = WrappedComponent => (
  props => (
    <div>
      <div>{ props.display.get('loading') && <LoadingSpinner /> }</div>
      <WrappedComponent {...props} />
    </div>
  )
);

export default LoadingHOC;
