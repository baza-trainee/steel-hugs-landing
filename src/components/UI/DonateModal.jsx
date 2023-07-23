import React, { useState } from 'react';
import './DonateModal.css';

export default function DonateModal({ visibleModal }) {
  const donateModalClasses = ['donateModal'];
  let [donateButtonClasses, setButtonClasses] = useState('donate');
  let [donationSum, setDonationSum] = useState();

  function checkSum() {
    if (!donationSum || donationSum <= 0 || isNaN(donationSum)) {
      console.log('fail', donationSum);
    } else {
      console.log('succes', donationSum);
    }
  }

  function onSubmit() {
    Number(donationSum);
    checkSum();
    setButtonClasses('donate donateButton_clicked');
  }
  if (visibleModal) {
    donateModalClasses.push('donateModalActive');
  }

  return (
    <div className={donateModalClasses.join(' ')}>
      <div className='donateModalContent'>
        <div
          onClick={(e) =>
            setDonationSum(Number(e.target.innerText.split(' ')[0]))
          }
          className='sumButtons'
        >
          <button className='donationSum'>100 грн</button>
          <button className='donationSum'>200 грн</button>
          <button className='donationSum'>500 грн</button>
        </div>
        <input
          className='donationSum'
          type='text'
          value={donationSum}
          onChange={(e) => setDonationSum(e.target.value)}
        />
        <div className='buttonContainer donateInModal'>
          <button className={donateButtonClasses} onClick={() => onSubmit()}>
            Оплатити
          </button>
        </div>
      </div>
    </div>
  );
}
