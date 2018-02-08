import React, { Component } from 'react';
import LoadingSpinner from '../components/misc/loadingSpinner';

const InfiniteScrollHOC = WrappedComponent => (
  class InfiniteScroll extends Component {
    state = { itemsLoaded: 0 }
    componentDidMount() {
      window.addEventListener('scroll', this.scrollToBottom, false);
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollToBottom, false);
    }
    scrollToBottom = () => {
      const { display, apiCall } = this.props;

      if ((document.body.scrollHeight - window.innerHeight) === window.pageYOffset) {
        if (display.get('count') < display.get('total')) {
          this.setState({
            itemsLoaded: this.state.itemsLoaded + display.get('count'),
          });
          apiCall(this.state.itemsLoaded);
        }
      }
    }
    render() {
      return (
        <div>
          <div>{ this.props.display.get('loading') && <LoadingSpinner /> }</div>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
);

export default InfiniteScrollHOC;
