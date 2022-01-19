import React,{useState}  from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {  ExitToApp } from '@material-ui/icons';
import {
  ListItemText,
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  Collapse,
  Box,
} from '@material-ui/core';
import tema from './theme';

const useStyles = makeStyles( theme =>  tema(theme) );

 const  Navbar = ({ buttons, getComponent,children, logout }) => {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openCollapse, setOpenCollapse ] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar
          sx={{
            justifyContent:"space-between"
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" 
              className={classes.maintypos}
          >
            Configuración 
          </Typography>
          <Box
          component="img"
          width={"20rem"}
          height={"auto"}
          marginLeft={"calc( 100% - 33rem)"}
          src="https://dashboardinnovacion.netlify.app/assets/img/logo_banorte_rojo.png"
           ></Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={ () => {handleDrawerClose(); setOpenCollapse(false)}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

          {buttons.map(({Name, Micon, sections} , i) => (
        <List key={'List' +i}>
            <ListItem
            key={"listItem"+ i}
            button
            id={ sections.length === 0 ? Name : "listItem_"+ i + "_"+ Name }
            name={Name}
            onClick={ e => { 
              sections.length === 0 ?  
              getComponent( e.currentTarget.id ): 
              setOpenCollapse( !openCollapse );
              setOpen(true);
              }}>

              <ListItemIcon > { Micon } </ListItemIcon>
              <ListItemText primary={Name}/>
            </ListItem>
            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                {    
                    sections.length > 0 && 
                    <>
                    <Divider key="topDivider"/>
                    {         
                      sections.map(
                        (el, k) => (
                          <List component="div" disablePadding key={"subList-"+i + k }  >
                            <ListItem
                            name={Name}
                            id={ el.path }
                            onClick={(e) => {
                              getComponent( e.currentTarget.id  ); 
                              setOpenCollapse(true)
                            }}
                            button className={classes.menuItem}>
                              <ListItemText inset primary={el.Name }   />
                            </ListItem>
                          </List>
                          )
                      )
                    }
              
                    <Divider key={"downDivider"}/>
                    </>     
                  }
              </Collapse>

        </List>
          ))
          }
        <Divider/>
            
        <ListItem
            key={"logout"}
            button
            id={ "logoutButton" }
            name={"Logout"}
            onClick={logout}>

              <ListItemIcon > <ExitToApp/> </ListItemIcon>
              <ListItemText primary={ "Salir"}/>
            </ListItem>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
              {children}
      </main>
    </div>
  );
}


export default Navbar
