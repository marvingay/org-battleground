import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Inbox: React.FC = () => {
  const { state } = useContext(GlobalContext);
  return (
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
              <TableRow key={idx}>
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
  );
};

export default Inbox;
