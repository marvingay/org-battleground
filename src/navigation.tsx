import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import GamesIcon from '@material-ui/icons/Games';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HelpIcon from '@material-ui/icons/Help';

interface Navigation {
  text: string;
  icon: JSX.Element;
}
export const navItem: Navigation[] = [
  {
    text: 'Home',
    icon: <DashboardIcon />,
  },
  {
    text: 'Announcements',
    icon: <AnnouncementIcon />,
  },
  {
    text: 'Games',
    icon: <GamesIcon />,
  },
  {
    text: 'Messages',
    icon: <MessageIcon />,
  },
  {
    text: 'Notifications',
    icon: <NotificationsIcon />,
  },
  {
    text: 'Settings',
    icon: <SettingsIcon />,
  },
  {
    text: 'Help',
    icon: <HelpIcon />,
  },
];
