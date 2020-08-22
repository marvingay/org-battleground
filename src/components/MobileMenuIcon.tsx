import React from 'react';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';

type Props = {
  callback: () => void;
}

const MobileMenuIcon: React.FC<Props> = ({ callback }) => {
  return (
    <Button onClick={callback}>
      <Tooltip title='Menu'>

        <MenuIcon />
      </Tooltip>
    </Button>
  )
}

export default MobileMenuIcon;
