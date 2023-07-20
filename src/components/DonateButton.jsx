import React from 'react';
import './DonateButton.css';

export default function DonateButton(props) {
  function click() {
    console.log(click);
  }
  return (
    <div className='buttonContainer'>
      <button {...props} onClick={click} className='donate'></button>
    </div>
  );
}
