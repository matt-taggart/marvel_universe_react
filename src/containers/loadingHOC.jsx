import React from 'react';
import LoadingSpinner from '../components/misc/loadingSpinner';
import { compose, branch, renderComponent } from 'recompose';

export default branch(
  props => Object.keys(props.data).length && props.isLoading,
  renderComponent(LoadingSpinner),
);

