import React from 'react';
import PropTypes from 'prop-types';
import LoadWithInfiniteScroll from '../../containers/loadWithInfiniteScroll';
import CreatorCard from '../cards/creatorCard';

const CreatorList = ({ history, saveResource, showSaveItemErrorModal, data, isSignedIn }) => (
  <div className="columns is-multiline">
    { data.map(item => (
      <CreatorCard
        {...item}
        history={history}
        saveResource={saveResource}
        showSaveItemErrorModal={showSaveItemErrorModal}
        isSignedIn={isSignedIn}
        key={item.id}
      />
    )) }
  </div>
);

CreatorList.propTypes = {
  history: PropTypes.object.isRequired,
  saveResource: PropTypes.func.isRequired,
  showSaveItemErrorModal: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
};

export default LoadWithInfiniteScroll(CreatorList);
