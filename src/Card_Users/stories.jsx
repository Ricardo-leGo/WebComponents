import React, {useState} from "react";
import { storiesOf } from "@storybook/react";
import Card_Users from './index'
import { 
  FormControl, InputAdornment, 
  InputLabel, 
  OutlinedInput, 
  NativeSelect, 
  TextField,
  Box
} from "@material-ui/core";
import { AccountCircle, Email,  Work } from "@material-ui/icons";
import {User, direcciones } from './../constants';


storiesOf("Card_Users", module)
.add("default" , () => {
  const [ isEditableUserCard, setIsEditableUserCard] = useState('');
  const [ newValues, setNewValues ] = useState({});
  const [ Dirs, setDirs ] = useState( direcciones ?? [] );
  
  const setisEditableFunc = ( curr ) => {setIsEditableUserCard(curr)};
  const setValuesUser = (name, value) => setNewValues({...newValues,  [ name ]: value, UsuarioI: isEditableUserCard  });
  const getNewVAlues = () => console.log( "newValues", newValues );

  
return (
      <Card_Users
      user={User}
      isEditableCardUser={isEditableUserCard}
      setisEditableFunc={setisEditableFunc}
      getNewVAlues={() => getNewVAlues()}
      url={'https://picsum.photos/200'}
      inputBoxUser={ 
      (
      <TextField 
      label="Nombre de usuario" 
      variant="standard"
      defaultValue={User.Nombre}
      name={'Nombre'}
      onChange={({target})=>setValuesUser( target.name, target.value )}
      InputProps={{
        startAdornment:(
          <InputAdornment position="start">
            <AccountCircle/>
          </InputAdornment>
        )
      }}
      />
      )

      }
      inputEmail={
        <TextField 
        label="Email" 
        variant="standard"
        defaultValue={User.Correo}
        name={'Correo'}
        onChange={({target})=>setValuesUser( target.name, target.value )}
        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <Email/>
            </InputAdornment>
          )
        }}
        />
      }
      
      inputPuesto={
        <TextField
        label='Puesto'
        variant='standard'
        defaultValue={User.PuestoTitulo}
        name={'Puesto'}
        onChange={({target})=>setValuesUser( target.name, target.value )}
        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
            <Work/>
          </InputAdornment>
          )
        }}

        />
      }
      inputUsuarioI={
        <TextField
        label='UsuarioI'
        variant='standard'
        defaultValue={User.UsuarioI}
        name={'UsuarioI'}
        onChange={({target})=>setValuesUser( target.name, target.value )}
        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
            <AccountCircle/>
          </InputAdornment>
          )
        }}
        />
      }

      SelectDirections={
        <Box sx={{width:'80%'}} >
        <FormControl fullWidth>
        <InputLabel style={{paddingLeft:'.5rem'}} id="DirectionsSelector">Dirección</InputLabel>
        <NativeSelect
          id="selectDirecciones"
          name="Direccion"
          defaultValue={User.Direccion}
          onChange={({target}) => setValuesUser(target.name, target.value) }
          input={<OutlinedInput label="Dirección" />
        }
        >
          {Dirs.map( 

            ( Dir, i ) => (
              
            Dir.status ? 
            <option
              key={Dir.Clave + i}
              value={Dir.Clave}
            >
              {Dir.Titulo}
            </option> : 
            null
          ))
          }
        </NativeSelect>
      </FormControl>
        </Box>

      }

      />
  )}
);