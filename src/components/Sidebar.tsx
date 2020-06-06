import React from 'react';
import { Drawer, List } from '@material-ui/core';
import NavItem from './NavItem';
import DateTime from './DateTime';
import { navItem } from '../navigation';

const Sidebar = () => {
  return (
    <Drawer open variant="permanent">
      <List>
        {navItem.map(item =>
          <NavItem text={item.text} icon={item.icon} />
        )}
      </List>
      <DateTime />
    </Drawer>
  )
}

export default Sidebar
