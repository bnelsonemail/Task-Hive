// src/icons/SocialIcons.js
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const SocialIcons = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={24} color="#4267B2" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={24} color="#1DA1F2" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={24} color="#0077B5" />
    </a>
  </div>
);
