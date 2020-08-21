import React from 'react';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

type Props = {
  callback: () => void;
}

const MobileMenuIcon: React.FC<Props> = ({ callback }) => {
  return (
    <Button onClick={callback}>
      <MenuIcon />
    </Button>
  )
}

export default MobileMenuIcon;
