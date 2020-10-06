import React from 'react';

import UserDialog from '../Modal/UserDialog';
import { LOCAL_URI } from '../../constants';
import './Profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      user: {
        username: '',
        email: '',
        password: ''
      }
    }
  }

  handleOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  handleSubmit = (event) => {
    console.log(this.state.user);

    fetch(`${LOCAL_URI}/user/signup`, {
      method: 'POST',
      body: JSON.stringify(this.state.user)
    }).then(function(response) {
      console.log(response);
      return response.json();
    });

    event.preventDefault();
  }

  onChangeHandler = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.currentTarget.name]: e.currentTarget.value
      }
    });
  }

  render() {
    return (
      <div className="user-profile">
        <button
          className="mdc-icon-button material-icons"
          onClick={this.handleOpen}
        >
        account_box
        </button>
        <UserDialog
          open={this.state.isOpen}
          onClose={this.handleClose}
          onSubmit={this.handleSubmit}
          onChangeHandler={this.onChangeHandler}
        />
      </div>
    );
  }
};

export default Profile;
