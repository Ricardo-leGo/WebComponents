import React from "react";
import { storiesOf } from "@storybook/react";
import NavBar from './NavBar';
import { menu } from './constants'

storiesOf("NavBar", module)
.add("default" , () => (

  <NavBar
  buttons={ menu }
  logout ={ () => console.log("Estoy yendo pa salir de la app") }
  getComponent={ component => console.log( component )}
  />

  )
);