import React from 'react';
import { Container, Drawer, List, Typography } from '@material-ui/core';
import NavItem from './NavItem';
import DateTime from './DateTime';
import { navItem } from '../navigation';

const Sidebar = () => {
  return (
    <Drawer open variant="permanent" >
      <Container>
        <Typography variant='h4' gutterBottom>ORG BG</Typography>
      </Container>

      <Container>
        <Typography variant='h5' display='inline' gutterBottom>Username</Typography>
      </Container>

      <List>
        {navItem.map(item =>
          <NavItem text={item.text} icon={item.icon} />
        )}
      </List>
      <Container id='DateTime'>
        <DateTime />
      </Container>


    </Drawer>
  )
}

export default Sidebar
