import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const NavItem: React.FC<{ text: string; icon: JSX.Element }> = ({
  text,
  icon,
}) => {
  const linkName = (txt: string): string => {
    if (txt.toLowerCase() === 'log out') return 'logout';
    return txt.toLowerCase();
  };
  return (
    <NavLink to={linkName(text)}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItem>
    </NavLink>
  );
};

export default NavItem;
