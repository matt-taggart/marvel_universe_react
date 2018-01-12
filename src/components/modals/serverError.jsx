import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const ServerErrorModal = ({ isOpen, hideServerErrorModal }) => (
  <Modal
    isOpen={isOpen}
    style={{
      content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '25vh',
        margin: '0 auto',
        textAlign: 'center',
      },
    }}
  >
    <span className="close-thin" role="button" onClick={hideServerErrorModal} />
    <h1 className="is-size-4 mar-t-2">Sorry!</h1>
    <div>
      <p>
        There seems to be an issue connecting to the server. Please try again later.
      </p>
    </div>
  </Modal>
);

ServerErrorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  hideServerErrorModal: PropTypes.func.isRequired,
};

export default ServerErrorModal;
