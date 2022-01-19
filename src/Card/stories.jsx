import React from "react";
import { storiesOf } from "@storybook/react";
import Card from './Card';
import { CardsData, EtasIcons, EdasIcons } from '../constants';
import { Switch, TextField } from "@material-ui/core";

const numberELement = 1
const type = "EDO"
const data = CardsData
?.getAllEtapas
.Etapas.filter(el => el.Tabla === type);
storiesOf("Card", module).add("default" , () => {
  
  const [nameOfEditable, setNameOfEditable] = React.useState('');

  return(
 
    <Card
    name={'Card-'+data[numberELement].Clave}
    nameOfEditable={nameOfEditable}
    element={ data[numberELement] }
    Noelement={{ type, No:numberELement}}
    EdasIcons={EdasIcons}
    EtasIcons={EtasIcons}
    InputTitulo={ TextField }
    InputSwitch={ Switch  }
    editableElement={(value) => {setNameOfEditable(value)}}
    getElementEdited ={ ( element ) => {
      console.log( "element", element );
      setNameOfEditable('')
    }} 
    enableDisable={(id, ev) =>{console.log( id, ev )  }}
    />
  );
});
