import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from './loadingSpinner';

export default WrappedComponent => (
  class extends Component {
    componentDidMount() {
      this.props.apiCall();
    }
    static propTypes = {
      apiCall: PropTypes.func.isRequired,
      isLoading: PropTypes.bool.isRequired,
      list: PropTypes.array.isRequired,
    }
    render() {
      const { isLoading, list, history } = this.props;
      if (isLoading) {
        return <LoadingSpinner />;
      }

      return (
        <div className="columns is-multiline">
          { list.map(item => <WrappedComponent {...item} history={history} key={item.id} />) }
        </div>
      );
    }
  }
);
