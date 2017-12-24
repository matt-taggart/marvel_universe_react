import React from 'react';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import LoadingSpinner from '../components/misc/loadingSpinner';

export default compose(
  lifecycle({
    componentDidMount() {
      const { apiCall, getUser } = this.props;
      apiCall();
      getUser();
    }
  }),
  branch(
    props => props.isLoading || !Object.keys(props.data).length,
    renderComponent(LoadingSpinner),
  ),
);
