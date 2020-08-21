import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';
import { formatDistance } from 'date-fns';
// Styles
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  inbox: {
    maxWidth: '90%',
  },
  header: {
    fontWeight: 'bold',
  },
}));

const MessageInbox: React.FC = () => {
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
    <Grid className={classes.inbox} item xs={12} >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.header}>Name</TableCell>
              <TableCell className={classes.header}>Recent Message</TableCell>
              <TableCell className={classes.header}>Last Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* If Empty Inbox, display default message */}
            {state.user.threads.length === 0 && (
              <TableRow>
                <TableCell>Empty inbox?</TableCell>
                <TableCell>Log-in and Write a New Message to Marvin!</TableCell>
                <TableCell>Now!</TableCell>
              </TableRow>)}
            {/* Map populated threads to inbox */}
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

export default MessageInbox;
