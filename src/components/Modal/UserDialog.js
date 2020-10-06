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
        onSubmit={this.props.onSubmit}
        login={this.props.isLogin}
      >
        <DialogTitle id="user-dialog-title">Signup/Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe and enjoy easily navigating back to your favorite recipes, create an account here.
          </DialogContentText>
          <form id="signup-form" onSubmit={this.onSubmit} autoComplete="off">
            <TextField label="Username" onChange={this.props.onChangeHandler} name="username" variant="outlined" required/>
            <TextField label="Email" onChange={this.props.onChangeHandler} name="email" variant="outlined" type="email" required/>
            <TextField label="Password" onChange={this.props.onChangeHandler} name="password" variant="outlined" type="password" required/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button form='signup-form' type='submit' color="primary">
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default UserDialog;
