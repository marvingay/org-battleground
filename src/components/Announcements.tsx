import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';
import AnnouncementItem from './AnnouncementItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// TODO: Add ability to filter announcements here or in Nav Bar
const useStyles = makeStyles({
  container: {
    marginTop: '40px',
  },
});
const Announcements: React.FC = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({
      type: Types.SetPageTitle,
      payload: {
        title: 'Announcements'
      },
    });
  }, [dispatch]);
  return (
    <Container className={classes.container}>
      <Grid item container spacing={5}>
        {state.announcements.map((item) => (
          <AnnouncementItem key={item.id} announcement={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default Announcements;
