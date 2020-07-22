import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';
import { formatDistance } from 'date-fns';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  inbox: {
    maxWidth: '40rem',
  },
}));

const Inbox: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const classes = useStyles();

  const handleClick = (event: any) => {
    const user = event.currentTarget.dataset.user;
    const idx = event.currentTarget.dataset.idx;
    dispatch({
      type: Types.SetActiveThread,
      payload: { activeThread: state.user.threads[idx][user] },
    });
  };

  return (
    <Grid className={classes.inbox} item md={6}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Recent Message</TableCell>
              <TableCell>Last Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.user.threads.map((thread, idx) => {
              const user = Object.keys(thread)[0];
              const recentMessage = thread[user][0].body.slice(0, 40);
              const lastUpdated = thread[user][0].date;
              const msgDate = new Date(lastUpdated);
              const currentDate = new Date();
              const fmtDate = formatDistance(msgDate, currentDate, {
                includeSeconds: true,
                addSuffix: true,
              });

              return (
                <TableRow
                  data-user={user}
                  data-idx={idx}
                  key={idx}
                  hover
                  onClick={handleClick}
                >
                  <TableCell component='th' scope='row'>
                    {user}
                  </TableCell>
                  <TableCell>{recentMessage}</TableCell>
                  <TableCell>{fmtDate}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Inbox;
