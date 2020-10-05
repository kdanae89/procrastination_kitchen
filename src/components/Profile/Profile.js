import React, { useState } from 'react';

import UserDialog from '../Modal/UserDialog';
import './Profile.scss';

const Profile = props => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="user-profile">
      <button
        className="mdc-icon-button material-icons"
        onClick={handleOpen}
      >
      account_box
      </button>
      <UserDialog
        open={isOpen}
        onClose={handleClose}
      />
    </div>
  );
};

export default Profile;
