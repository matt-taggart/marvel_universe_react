import React, { Component } from 'react';
import LoadingSpinner from './loadingSpinner';

export default WrappedComponent => (
  class extends Component {
    componentDidMount() {
      this.props.apiCall();
    }
    render() {
      const { isLoading, list } = this.props;
      if (isLoading) {
        return <LoadingSpinner />;
      }

      return (
        <div className="columns is-multiline">
          { list.map(item => <WrappedComponent {...item} key={item.id} />) }
        </div>
      );
    }
  }
);
