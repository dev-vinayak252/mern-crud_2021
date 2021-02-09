import React, { useState } from 'react';
import {
  makeStyles,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Button
} from '@material-ui/core'
import { addUser } from '../actions/usersAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },

  paper: {
    margin: theme.spacing(4, 4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Users = ({
  user: { users },
  addUser
}) => {

  const [fstNam, setFstNam] = useState('');
  const [lstNam, setLstNam] = useState('');

  const onsubmit = (e) => {
    e.preventDefault();
    const userData = { fstNam, lstNam };
    addUser(userData);
  }

  const classes = useStyles();
  return(
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <form onSubmit={onsubmit} noValidate className={classes.form}>
            <TextField variant="outlined" margin="normal" required fullWidth id="firstName"
              label="First Name" name="firstName" autoComplete="First Name" autoFocus 
              value={ fstNam } onChange={ (e)=>setFstNam(e.target.value) } />

            <TextField variant="outlined" margin="normal" required fullWidth id="lastName"
              label="Last Name" name="lastName" autoComplete="Last Name"
              value={lstNam} onChange={ (e)=>setLstNam(e.target.value) } />

            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Add Record
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );

};

Users.propTypes = {
  user: PropTypes.object.isRequired,
  addUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {addUser};

export default connect(mapStateToProps, mapDispatchToProps)(Users);