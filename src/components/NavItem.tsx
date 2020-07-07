import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  links: {
    textDecoration: 'none',
  },
}));

const NavItem: React.FC<{ text: string; icon: JSX.Element }> = ({
  text,
  icon,
}) => {
  const linkName = (txt: string): string => {
    if (txt.toLowerCase() === 'log out') return 'logout';
    return txt.toLowerCase();
  };
  const classes = useStyles();
  return (
    <NavLink className={classes.links} to={linkName(text)}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItem>
    </NavLink>
  );
};

export default NavItem;
