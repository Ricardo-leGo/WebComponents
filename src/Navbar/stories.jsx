import React from "react";
import { storiesOf } from "@storybook/react";
import NavBar from './NavBar';
import { menu } from './constants'

storiesOf("NavBar", module).add("default" , () => (
  <NavBar
  open_Btn={ menu }
  />
  )
);