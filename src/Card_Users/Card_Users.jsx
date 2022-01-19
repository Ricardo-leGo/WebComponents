import React, {useState} from 'react';
import styles from './styles.module.css';
import { Divider, Typography, Box, Fab } from '@material-ui/core';
import { AccountBox, Edit, Save } from "@material-ui/icons";


const Card_Users = ({
  user, 
  isEditableCardUser, 
  setisEditableFunc,
  inputUsuarioI,
  inputBoxUser, 
  inputPuesto,
  inputEmail,
  getNewVAlues,
  url,
  SelectDirections
}) => {

  const [comparableUser] = useState(user.UsuarioI);

  return (
    <Box className={ styles.UserCard } >

      <Box className={styles.contentImgUser}>

        {
          !url ?
        <AccountBox style={{fontSize:'10rem' }}/> : 
        <img 
        src={url} 
        alt="Image"  />
        }

      </Box>
      
      <Divider orientation='vertical' />
      <Box className={styles.contentInfoUser}>
      <Box className={styles.editZone}>
          <Fab variant="circular" name={user.UsuarioI}
          onClick={
            ({ currentTarget }) => {

            if(comparableUser === isEditableCardUser) {

              getNewVAlues();
              setisEditableFunc('');
              return
            }
            setisEditableFunc( currentTarget.name );
            return 
            }}>
           { 
              isEditableCardUser === comparableUser ?
              <Save/>
              :
              <Edit/>
           }
          </Fab>
      </Box>
        <Box component='div' className={styles.commonDiv}>
          {
          isEditableCardUser===comparableUser?
          inputBoxUser 
          :
          <Typography component='h6' variant='h6' > {user?.Nombre} </Typography>
          }
        </Box>

        { isEditableCardUser!==comparableUser && <Divider/> }

          <Box component='div' className={styles.commonDiv} >
            {            
            isEditableCardUser === comparableUser ?
            inputPuesto 
            : 
            <Typography className={styles.puesto} component='p' 
            style={{
              margin: '0 auto', 
              paddingTop:'0rem', 
              marginTop:0,
            }} 
            >{user.PuestoTitulo}</Typography>
            }
          </Box>
          <Box  component='div' className={styles.commonDiv} >
            {
            isEditableCardUser === comparableUser ? 
            inputUsuarioI 
            :
            <Typography className={styles.UsuarioI} component='p' >{user.UsuarioI}</Typography>
            }
          </Box>
          <Box component='div' className={styles.commonDiv}>
            {            
            isEditableCardUser  === comparableUser ?
            inputEmail
            :
            <Typography className={styles.UsuarioI} component='p' >{user.Correo}</Typography>
            }
          </Box>
          <Box component='div' className={styles.commonDiv} >
            {isEditableCardUser === comparableUser ?
              SelectDirections :
              <Typography style={{
                width:'90%', 
                margin: '0 auto', 
         
              }} component='p' >{user.Titulo}</Typography>
            }
          </Box>
      </Box>
    </Box>
  )
}

export default Card_Users
