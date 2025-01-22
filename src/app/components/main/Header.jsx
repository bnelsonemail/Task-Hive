// src/components/main/Header.js
import React from "react";
import { SocialIcons } from "../../../icons/SocialIcons";
import { NavigationIcons } from "../../NavigationIcons";

export const Header = () => (
  <header>
    <h1>My Website</h1>
    <NavigationIcons />
    <SocialIcons />
  </header>
);

export default Header;
