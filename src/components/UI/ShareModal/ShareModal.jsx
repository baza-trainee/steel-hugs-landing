import React from 'react';
import './ShareModal.css';
import Group57 from '../../../images/Group57.svg';
import {
  FacebookShareButton,
  LinkedinShareButton,
  ViberShareButton,
} from 'react-share';

export default function ShareModal({ visible, setVisible }) {
  const classes = ['modal'];

  if (visible) {
    classes.push('active');
  }

  return (
    <div className={classes.join(' ')}>
      <button className='close-button' onClick={() => setVisible(false)}>
        <img src={Group57} />
      </button>
      <div className='modal-content'>
        <div className='social_buttons'>
          <div className='facebook'>
            <FacebookShareButton url={'https://steel-hugs-landing.vercel.app/'}>
              Поділитись у Facebook
            </FacebookShareButton>
          </div>
          <div className='linkedin'>
            <LinkedinShareButton url={'https://steel-hugs-landing.vercel.app/'}>
              Поділитись у Linkedin
            </LinkedinShareButton>
          </div>
          <div className='viber'>
            <ViberShareButton url={'https://steel-hugs-landing.vercel.app/'}>
              Поділитись у Viber
            </ViberShareButton>
          </div>
        </div>
      </div>
    </div>
  );
}
