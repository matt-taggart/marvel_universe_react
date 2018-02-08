import React from 'react';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import InfiniteScrollHOC from './infiniteScroll';
import LoadingHOC from './loading';
import NoResultsFound from '../components/misc/noResultsFound';

export default compose(
  lifecycle({
    componentDidMount() {
      const { getUser, apiCall, match = {}, isSignedIn } = this.props;
      const id = match.params && match.params.id;

      if (isSignedIn) {
        getUser();
      }

      if (apiCall) {
        apiCall(id);
      }
    },
    componentWillUnmount() {
      this.props.clearApiData();
    }
  }),
  InfiniteScrollHOC,
  LoadingHOC,
  branch(
    props => props.loading && !Object.keys(props.data).length,
    renderComponent(NoResultsFound),
  )
);
