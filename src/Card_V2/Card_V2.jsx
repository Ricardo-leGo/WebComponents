import React from 'react';
import { Box, Divider, Icon, IconButton, Typography } from '@material-ui/core';
import { makeStyles} from '@material-ui/styles';
import {Edit, VerifiedUser, Save}  from '@material-ui/icons';
import tema  from './theme';

const stylesMUI = makeStyles( theme => tema( theme ) );

const sizeFont = '1.2rem';

const Card_V2 = ({
  card, 
  InputText, 
  Descripcion, 
  Clave,
  getName, 
  name, 
  editableName,
  getElement,
  getPermisos
}) => {
  const classes =  stylesMUI();
  return (
    <>
      <Box 
      component='div' 
      className={classes.mainBox}
      onClick={ e => getPermisos(e) }
      >

        <Box className={classes.titleBox}>
        
        <Icon>
          
          <VerifiedUser/>
          
          </Icon>
          
          {
            name !== editableName ? 
            
            <Typography variant='h6' component='h6'  >
            
            {card.Titulo}
            
            </Typography>: 
          
            InputText

          }

            <IconButton 
              name={name} 
              color="secondary" 
              className={classes.closeButton} 
              onClick={({currentTarget:{name}})  => 
              name !== editableName ? getName(name) : getElement()
              }
            >
            {
              
              name === editableName ?
              
              <Save/>:
              
              <Edit/> 

            }
          </IconButton>
        
        </Box>

         <Divider/>

      <Box component='div' className={classes.DescriptionBox} >

      { 
          name !== editableName ?
          
          <Typography paragraph={true} sx={{fontSize:sizeFont}} >
                {card.Descripcion}
          </Typography>:

         Descripcion

      }
      </Box>

      <Divider/>

      <Box component='div' className={classes.clave} >
            {

            name !== editableName ?  
              <Typography paragraph={true} sx={{fontSize:sizeFont}} >
                {card.Clave}
              </Typography>:
              
              Clave

            }
      </Box>

      </Box>

      
    </>
  )
}

export default Card_V2
