import React from "react";
import Card_V2 from "./Card_V2";
import { storiesOf } from "@storybook/react";
import { dataRolesYPermisos } from './../constants';
import { Box, TextareaAutosize, TextField } from "@material-ui/core";

let EachCard = dataRolesYPermisos.Roles[0];

storiesOf("Card_V2", module).add("default" , () => {

  const [isItemEditable, setIsItemEditable] = React.useState('');
  const [item, setItem] = React.useState(EachCard);
  const [Permisos, setPermisos] = React.useState(EachCard.Permisos);
  const getName = ( value ) => setIsItemEditable( value );
  
  return (

  <Box component='div' style={{marginTop:"3rem"}}>
            <Card_V2
            name={ `Clave-${EachCard.Clave}` }
            getName={ value  => getName( value )}
            getPermisos={ (e) => setPermisos(EachCard.Permisos)}
            editableName={ isItemEditable }
            getElement={() => {console.log( item  ); setIsItemEditable(''); EachCard = item } }
            card={EachCard}
            InputText={ 
              <TextField
                label='Titulo'
                defaultValue={EachCard.Titulo}
                name="Titulo"
                id={`cardV2-${0}`}
                fullWidth
                size="small"

                  onChange={({target:{name, value}}) => { setItem({ ...item, [ name ]:value }) }}

              />
            }
            Descripcion={ 
            <TextareaAutosize
            minRows={1}
            name="Descripcion"
            placeholder="Descripción"
            style={{ width: '15rem', padding:'.5rem', boxSizing:'border-box'}}
            defaultValue={EachCard.Descripcion}
                
              onChange={({target:{name, value}}) => { setItem({ ...item, [ name ]:value }) }}

            /> 
            }
          
            Clave={
              <TextField
              label='Clave'
              name="Clave"
              defaultValue={EachCard.Clave}
              id={`cardV2_clave-${0}`}
              fullWidth
              size="small"

                onChange={({target:{name, value}}) => { setItem({ ...item, [ name ]:value }) }}

              />
            }          
            />
    </Box>
  )
}
);