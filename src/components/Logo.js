import React from 'react';

import logo from '../logo_img.png';

function Logo(props) {
  return (
    <img
      alt="Logo"
      src={logo}
      {...props}
      height="40"
      width="60"
    />
  );
}

export default Logo;
