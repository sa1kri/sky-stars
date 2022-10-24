import React from 'react';
import Moon from './Moon';
import './Sky.css';
import Star from './Star';

function Sky() {
  return (
    <div className="Sky">
      < Moon />
      < Star />
    </div>
  );
}

export default Sky;
