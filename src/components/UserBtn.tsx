import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PersonIcon from '@material-ui/icons/Person';



const UserBtn: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(null);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>

      <Button onClick={handleClick}>
        <PersonIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        onClose={handleClose}
        open={open}
      >
        <MenuItem>My Profile</MenuItem>
      </Menu></div>
  )
}

export default UserBtn;