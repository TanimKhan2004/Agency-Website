// src/Components/icons.js
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import './icons.css';

function Icons() {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} className="icon" />
      </a>
      <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} className="icon" />
      </a>
      <a href="mailto:your-email@example.com">
        <MdEmail size={24} className="icon" />
      </a>
      <a href="tel:+447377139885">
        <MdPhone size={24} className="icon" />
      </a>
    </div>
  );
}

export default Icons;
