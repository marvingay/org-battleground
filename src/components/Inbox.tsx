import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Types } from '../types';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Inbox: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleClick = (event: any) => {
    const user = event.currentTarget.dataset.user;
    const idx = event.currentTarget.dataset.idx;
    dispatch({
      type: Types.SetActiveThread,
      payload: { activeThread: state.user.threads[idx][user] },
    });
  };

  return (
    <Grid item md={6}>
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
                  <TableCell>{lastUpdated}</TableCell>
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
