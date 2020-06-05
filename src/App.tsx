import React, { useState, useEffect } from 'react';
import './App.scss';
import { Avatar, Container, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleIcon from '@material-ui/icons/People';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpIcon from '@material-ui/icons/Help';

const App: React.FC = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const timeDate = new Date().toLocaleString();
      setTime(timeDate);
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);
  return (
    <Drawer open variant="permanent">
      <List>
        <Container>
          <Typography variant="h4">Title</Typography>
        </Container>
        <Divider />
        <ListItem>
          <Avatar alt="John Doe" src="#" />{' '}
          <Typography variant="h6">johndoe</Typography>
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AnnouncementIcon />
          </ListItemIcon>
          <ListItemText>Announcements</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText>Friends</ListItemText>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText>Messages</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText>Notifications</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText>Help</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText>Log Out</ListItemText>
        </ListItem>
        <ListItem>
          {time}
        </ListItem>
      </List>
    </Drawer>
  );
}

export default App;
