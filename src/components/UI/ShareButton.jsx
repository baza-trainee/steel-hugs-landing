import React, { useState } from 'react';
import './ShareButton.css';
import ShareModal from './ShareModal';

export default function ShareButton() {
  let [visible, setVisible] = useState(false);
  let [buttonClasses, setButtonClasses] = useState('shareButton');
  function clickHandler() {
    setVisible(true);
    setButtonClasses('shareButton shareButton_clicked');
  }
  return (
    <div className='shareContainer'>
      <button className={buttonClasses} onClick={() => clickHandler()}>
        Поділитися Обіймами
      </button>
      <ShareModal visible={visible} setVisible={setVisible} />
    </div>
  );
}
