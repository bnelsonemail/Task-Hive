// src/icons/NavigationIcons.js
import { AiFillHome, AiOutlineInfoCircle } from 'react-icons/ai';

export const NavigationIcons = () => (
  <nav>
    <a href="/">
      <AiFillHome size={24} /> Home
    </a>
    <a href="/about">
      <AiOutlineInfoCircle size={24} /> About
    </a>
  </nav>
);
