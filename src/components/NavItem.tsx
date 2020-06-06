import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const NavItem: React.FC<{ text: string, icon: JSX.Element }> = ({ text, icon }) => {
  return (
    <ListItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  )
}

export default NavItem;
