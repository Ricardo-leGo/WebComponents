import { Box, Divider, Typography, IconButton, ButtonGroup, Button } from '@material-ui/core';
import React from 'react';
import { Edit, Save } from '@material-ui/icons';


const Card = ({
  element, 
  InputTitulo, 
  Noelement, 
  EdasIcons,
  EtasIcons,
  InputSwitch,
  editableElement,
  getElementEdited,
  nameOfEditable,
  name,
  enableDisable,
  
}) => {

  const [ modifiedElement, setModifiedElement ] = React.useState(element);
  const [ valueCount, setValueCount ] = React.useState(element.Orden);

  const incrementValue = ( value ) => {setValueCount( Number(value)+10 );  setModifiedElement({...modifiedElement, Orden:Number(value)+10 }) };
  const decrementValue = ( value ) => {setValueCount( Number(value)-10 );  setModifiedElement({...modifiedElement, Orden:Number(value)-10 }) };

  const modifyElement = ({target:{ name, value}}) => {
    setModifiedElement({ ...modifiedElement, [ name ]:value });    
  }

  let IconElement  ;

  if( Noelement.type === 'EDO' || Noelement.type=== 'EDA' ){
    
    IconElement = EdasIcons[ Noelement.No ];
  }

  if(Noelement.type === 'ETA'){
    IconElement = EtasIcons[Noelement.No]
  }

  return (
    <Box
      component='div'
      sx={{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        height:'10rem',
        width:'20rem',
        border:'solid 1px rgba(0,0,0,.3)',
        borderRadius:'6px',
        padding:'.25rem',
        position:'relative'
      }}
      >
      <Box 
      component='div'
      sx={{
      width:"100%",
      position:"absolute",
      padding:0,
      
      height:'fit-content',
      display:'flex',
      justifyContent:'flex-end',
      
     }}
      >
        <IconButton 
        name={name}
        onClick={ (e) =>  name === nameOfEditable ? 
          getElementEdited(modifiedElement) : 
          editableElement(e.currentTarget.name) 
        }
        color="secondary" 
        aria-label="add an alarm" 
        style={{

          transform:'translate(0, -50%)', 
          backgroundColor:"#fff",
          boxShadow:'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px'

          }} >

            {
              
              name !== nameOfEditable?
              <Edit />:
              <Save/>

            }
        </IconButton >
      </Box>


      <Box
      component='div'
      sx={{
        height:'100%',
        width:'65%',
        padding:0,
        margin:0,
        display:'flex',
        flexDirection:'column',
        border: 'solid 2px white'
      }}
      >


        <Box 
        component='div'
        sx={{

          height:'70%',
          padding:0,
          margin:0,
          display:'flex',
          justifyContent:'center',
          alignItems:'center'

        }}> 
          
          {  name === nameOfEditable?
            <InputTitulo
          name="Titulo"
          onChange={(e) => { modifyElement(e) }}
          label='Titulo'
          id="outlined-size-small"
          defaultValue={element.Titulo}
          size="small"/> :
          <Typography variant='h4' component='h4'>{element.Titulo}</Typography>

          }


         </Box>

      
      
      <Divider/>
       
       
        <Box

        sx={{
          height:'30%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}>
       {   

          name === nameOfEditable? 
          <>
          
          <InputTitulo 
          name="Clave"
          onChange={(e) => {modifyElement(e)} }
          label='Clave'
          id="outlined-size-small"
          defaultValue={element.Clave}
          size="small"/>
          <ButtonGroup size="small" aria-label="small outlined button group">
            <Button value={valueCount} onClick={(e) => {incrementValue(e.currentTarget.value);}}>+</Button>
             <Button disabled>{valueCount}</Button>
             <Button value={valueCount} onClick={(e) => decrementValue(e.currentTarget.value)}>-</Button>
          </ButtonGroup>
          </>
          :
  <Box 
  component='div'
        sx={{
          display:'flex',
          justifyContent:'space-between',
          width:'80%',

        }}
>
          <Typography variant='h6' component='h6' style={{fontSize:".85rem",display:"flex", justifyContent:"space-between"}}> 
          Clave: {element.Clave}
          </Typography>
          <Typography variant='h6' component='h6' style={{fontSize:".85rem",display:"flex", justifyContent:"space-between"}}> 
          Orden: {element.Orden}
          </Typography>
  </Box>

        }

        </Box>

      </Box>

<Divider orientation='vertical'/>

      <Box
        component='div'
        sx={{
          width:'30%',
          height:'100%',
          
        }}
      >
        <Box
          component='div'
          sx={{
            height:'71%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }}>

              <IconElement style={{fontSize:"4rem"}}/>

        </Box>
        <Divider/>
        <Box 
        component='div'
        sx={{
          height:'29%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        }}
        >
          <InputSwitch onChange={ (_, ev) => { enableDisable(element._id, ev) }}/>
        </Box>
      </Box>
        
    </Box>
  )
}

export default Card
