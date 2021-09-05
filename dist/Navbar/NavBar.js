import React from 'react';
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
import { Box } from '@material-ui/core';
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

const NavBar = ({
  open_Btn
}) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: true,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state,
      [anchor]: open
    });
  };

  const list = anchor => /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.list, {
      [classes.fullList]: anchor === 'top' || anchor === 'bottom'
    }),
    role: "presentation",
    onClick: toggleDrawer(anchor, false),
    onKeyDown: toggleDrawer(anchor, false)
  }, /*#__PURE__*/React.createElement(List, null, ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    key: text
  }, /*#__PURE__*/React.createElement(ListItemIcon, null, index % 2 === 0 ? /*#__PURE__*/React.createElement(InboxIcon, null) : /*#__PURE__*/React.createElement(MailIcon, null)), /*#__PURE__*/React.createElement(ListItemText, {
    primary: text
  })))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(List, null, ['All mail', 'Trash', 'Spam'].map((text, index) => /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    key: text
  }, /*#__PURE__*/React.createElement(ListItemIcon, null, index % 2 === 0 ? /*#__PURE__*/React.createElement(InboxIcon, null) : /*#__PURE__*/React.createElement(MailIcon, null)), /*#__PURE__*/React.createElement(ListItemText, {
    primary: text
  })))));

  return /*#__PURE__*/React.createElement("div", null, open_Btn && open_Btn.map(anchor => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    sx: {
      height: '100vh'
    },
    m: 0,
    bgcolor: "#f50057",
    color: '#fff',
    clone: true
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: toggleDrawer(anchor, true),
    heigth: "10%"
  }, '>')), /*#__PURE__*/React.createElement(SwipeableDrawer, {
    anchor: anchor,
    open: state[anchor],
    onClose: toggleDrawer(anchor, false),
    onOpen: toggleDrawer(anchor, true)
  }, list(anchor)))));
};

export default NavBar;