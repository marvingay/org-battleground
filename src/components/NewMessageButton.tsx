import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '10px 0px',
  },
}));

const NewMessageButton: React.FC = () => {
  const { dispatch } = useContext(GlobalContext);
  const classes = useStyles();

  const openMsgForm = () => {
    dispatch({
      type: Types.ShowMsgForm,
    });
  };
  return (
    <Grid className={classes.button} item>
      <Button onClick={openMsgForm} variant='contained'>
        Write New Message
      </Button>
    </Grid>
  );
};

export default NewMessageButton;
