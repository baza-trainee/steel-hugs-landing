import React from 'react';
import './ShareModal.css';
import Group57 from '../../images/Group57.svg';

export default function ShareModal({ visible, setVisible }) {
  const classes = ['modal'];

  if (visible) {
    classes.push('active');
  }

  return (
    <div className={classes.join(' ')}>
      <button onClick={() => setVisible(false)}>
        <img src={Group57} />
      </button>
      <div className='modal-content'>
        <div className='socials'>
          <p>Поділитись у Facebook</p>
          <p>Поділитись у Linkedin</p>
          <p>Поділитись у Viber</p>
        </div>
      </div>
    </div>
  );
}
