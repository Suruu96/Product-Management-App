import React from 'react';
import './styles/ErrorStyle.css';

function Error() {
  return (
    <div className='BodyError'>
      <h2>404 - Page Not Found</h2>
      <a href="/">Go Back to Home</a>
    </div>
  );
}

export default Error;
