import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import GamesIcon from '@material-ui/icons/Games';
import MessageIcon from '@material-ui/icons/Message';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HelpIcon from '@material-ui/icons/Help';

interface Navigation {
  text: string;
  icon: JSX.Element;
}
export const navItem: Navigation[] = [
  {
    text: 'Home',
    icon: <DashboardIcon color='primary' />,
  },
  {
    text: 'Announcements',
    icon: <AnnouncementIcon color='primary' />,
  },
  {
    text: 'Games',
    icon: <GamesIcon color='primary' />,
  },
  {
    text: 'Messages',
    icon: <MessageIcon color='primary' />,
  },
  {
    text: 'Settings',
    icon: <SettingsIcon color='primary' />,
  },
  {
    text: 'Help',
    icon: <HelpIcon color='primary' />,
  },
];
