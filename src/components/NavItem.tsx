import React from 'react';
import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';

const NavItem: React.FC<{ text: string; icon: JSX.Element }> = ({
  text,
  icon,
}) => {
  const linkName = (txt: string): string => {
    if (txt.toLowerCase() === 'log out') return 'logout';
    return txt.toLowerCase();
  };
  return (
    <RouterLink to={linkName(text)}>
      <ListItem>
        <Button fullWidth>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{text}</ListItemText>
        </Button>
      </ListItem>
    </RouterLink>
  );
};

export default NavItem;
