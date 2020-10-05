import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class UserDialog extends React.Component {

  render () {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <DialogTitle id="user-dialog-title">Signup/Login</DialogTitle>
        <DialogContentText>
          To subscribe and enjoy easily navigating back to your favorite recipes, create an account here.
        </DialogContentText>
        <form className="signup-form" autoComplete="off">
          <TextField label="Username" variant="outlined" required/>
          <TextField label="Email" variant="outlined" type="email" required/>
          <TextField label="Password" variant="outlined" type="password" required/>
        </form>
      </Dialog>
    )
  }
}

export default UserDialog;
