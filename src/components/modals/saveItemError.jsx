import React from 'react';
import PropTypes from 'prop-types';
import history from '../../utils/history';
import Modal from 'react-modal';

const SaveItemErrorModal = ({ isOpen, hideSaveItemErrorModal }) => {
  const redirectToRegistrationPage = () => {
    history.push('/register');
    hideSaveItemErrorModal();
  };
  return (
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
      <span className="close-thin" role="button" onClick={hideSaveItemErrorModal} />
      <h1 className="is-size-4 mar-t-2">Sorry!</h1>
      <div>
        <p>
          You must be logged in to use this feature. Don't have an account yet? 
          <a role="button" onClick={redirectToRegistrationPage}> Click here to register. </a>
        </p>
      </div>
    </Modal>
  );
};

SaveItemErrorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  hideSaveItemErrorModal: PropTypes.func.isRequired,
};

export default SaveItemErrorModal;

