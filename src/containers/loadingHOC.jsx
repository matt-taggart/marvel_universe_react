import React from 'react';
import { compose, lifecycle, branch, renderComponent, renderNothing } from 'recompose';
import LoadingSpinner from '../components/misc/loadingSpinner';

export default compose(
  lifecycle({
    componentDidMount() {
      const { getUser, apiCall, match, isSignedIn } = this.props;
      const id = match && match.params && match.params.id;

      if (isSignedIn) {
        getUser();
      }

      if (apiCall) {
        apiCall(id);
      }
    }
  }),
  branch(
    props => props.isLoading,
    renderComponent(LoadingSpinner),
  ),
  branch(
    props => !Object.keys(props.data).length,
    renderNothing,
  )
);

