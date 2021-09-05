import React from "react";
import { storiesOf } from "@storybook/react";
import NavBar from './NavBar';
storiesOf("NavBar", module).add("default", () => /*#__PURE__*/React.createElement(NavBar, {
  open_Btn: ['left']
}));