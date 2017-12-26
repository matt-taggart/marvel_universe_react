import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

export default ({ isOpen }) => (
  <Modal
    isOpen={isOpen}
    style={{
      content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '50vh',
        margin: '0 auto',
        textAlign: 'center',
      },
    }}
  >
    <span className="close-thin" />
    <h1 className="is-size-4 mar-t-2">Sorry!</h1>
    <div>
      <p>You must be logged in to use this feature. Don't have an account yet? Click here to register.</p>
    </div>
  </Modal>
)