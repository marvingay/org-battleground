import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';
import axios from 'axios';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    overflowWrap: 'anywhere'
  },
  qBlock: {
    margin: '20px 0px'
  },
  question: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  answer: {
    fontSize: '1.3rem',
    margin: '10px 0',
    wordWrap: 'break-word'
  }
}))


const Help: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const classes = useStyles();

  useEffect(() => {
    dispatch({
      type: Types.SetPageTitle,
      payload: {
        title: 'Help'
      },
    });
  }, [dispatch]);

  const handleUserDelete = async (e: any) => {
    e.preventDefault();

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/users/${state.user.name}`);

    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <div className={classes.qBlock}>
        <Typography className={classes.question} variant='h2'>What's the purpose of this website?</Typography>
        <div className={classes.answer}>To organize and faciliate the hosting and participation in Online Reality Games!</div>
      </div>
      <div className={classes.qBlock}>
        <Typography className={classes.question} variant='h2'>Do you have a privacy policy?</Typography>
        <div className={classes.answer}>Yes, you can view it by clicking <Link href='/privacy' >here</Link></div>
      </div>
      <div className={classes.qBlock}>
        <Typography className={classes.question} variant='h2'>Can I delete my account?</Typography>
        <div className={classes.answer}>Yes, if you are logged in, you can delete your account with the button that will appear below this text. <strong>There's no going back!</strong> </div>
        {state.user.name && <Button color='primary' onClick={handleUserDelete} variant='contained'><Typography variant='button'>Delete My Account</Typography></Button>}
      </div>
    </Container>
  )
}

export default Help;