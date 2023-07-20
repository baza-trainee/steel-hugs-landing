import React from 'react';
import './DonateButton.css';

export default function DonateButton(props) {
  return (
    <div className='buttonContainer'>
      <button {...props} className='donate'></button>
    </div>
  );
}
