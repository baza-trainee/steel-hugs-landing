import React from 'react';
import './DonateButton.css';

export default function DonateButton({ children }) {
  return (
    <div className='buttonContainer'>
      <button className='donate'>{children}</button>
    </div>
  );
}
