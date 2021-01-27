/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState  } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { getUser } from '../../Store/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10)
    }
  })
);



export default (props) => {
  const classes = useStyles();
  const [username , setUsername] = useState('');
  const [usernameError , setUsernameError] = useState('');

  const dispatch = useDispatch();
  let history = useHistory();

  const user = useSelector(
    (state) => state.users.user
  );
  useEffect(() => {
    if(user) history.push('/home');

  }, [user ,history]);


  const handleLogin = () => {
    if(!username ) return setUsernameError('Username is required');
    if(username.length < 4 ) return setUsernameError('Username should be more than 4 characters');
    
    setUsernameError('');
    dispatch(getUser(username));
  };



  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      setUsername(event.target.value)
    };

  return (
    <form className={classes.container} noValidate onSubmit={handleLogin} autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login App" />
        <CardContent>
          <div>
            <TextField
              error={!!usernameError}
              helperText={usernameError}
              fullWidth
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
              onChange={handleUsernameChange}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleLogin}
            >
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
