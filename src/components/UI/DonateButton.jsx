import React, { useState } from 'react';
import './DonateButton.css';
import DonateModal from './DonateModal';

export default function DonateButton({ children }) {
  let [visibleModal, setVisibleModal] = useState(false);
  let [donateButtonClasses, setDonateButtonClasses] = useState('donate');
  function clickHandler() {
    setVisibleModal(true);
    setDonateButtonClasses('donate donateButton_clicked');
  }
  return (
    <>
      <div className='buttonContainer'>
        <button className={donateButtonClasses} onClick={() => clickHandler()}>
          {children}
        </button>
      </div>
      <DonateModal visibleModal={visibleModal} />
    </>
  );
}
