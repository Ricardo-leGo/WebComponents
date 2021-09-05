import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Today from '@material-ui/icons/Today';

import { Box } from '@material-ui/core';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const  NavBar = ({ open_Btn }) =>  {
  const [iconsMenu] = useState([ 

    { icon: <Today/> },
    { icon: <Today/> },
    { icon: <Today/> },
    { icon: <Today/> },
    { icon: <Today/> },
    { icon: <Today/> },
  ])
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: true,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <Box 
    component="div" 
    sx={{height:'100vh', width:'fit-content'}} 
    bgcolor="yellow" 
    margin="0" 
    display="flex"
    flexDirection="column"
    justifyContent="center"
    >
      {
        open_Btn &&
      open_Btn.map((anchor, i) => (
        <>


          <Box 
          m={0} 
          bgcolor="#f50057" 
          color={'#fff'}  
          display={"flex"}
          flexDirection="column"
          alignItems="strech"
          borderRadius={0}
          m="1rem 0"
          clone>
          
          <Button
          onClick={toggleDrawer(anchor, true)} 
          heigth="2rem"
          startIcon={iconsMenu[i]}
          fullWidth
           >{anchor}
           </Button>

          </Box>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </>
      ))}
    </Box>
  );
}



export default NavBar;