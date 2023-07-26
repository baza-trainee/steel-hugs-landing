import React from 'react';
import styles from './ShareModal.module.css';
import Group57 from '../../../images/Group57.svg';
import {
  FacebookShareButton,
  LinkedinShareButton,
  ViberShareButton,
} from 'react-share';

export default function ShareModal({ visible, setVisible }) {
  let classes = `${styles.modal}`;

  if (visible) {
    classes += ` ${styles.active}`;
  }

  return (
    <div className={classes}>
      <button
        className={styles.close_button}
        onClick={() => setVisible(false)}
      >
        <img src={Group57} />
      </button>
      <div className={styles.modal_content}>
        <div className={styles.social_buttons}>
          <div className={styles.facebook}>
            <FacebookShareButton url={'https://steel-hugs-landing.vercel.app/'}>
              Поділитись у Facebook
            </FacebookShareButton>
          </div>
          <div className={styles.linkedin}>
            <LinkedinShareButton url={'https://steel-hugs-landing.vercel.app/'}>
              Поділитись у Linkedin
            </LinkedinShareButton>
          </div>
          <div className={styles.viber}>
            <ViberShareButton url={'https://steel-hugs-landing.vercel.app/'}>
              Поділитись у Viber
            </ViberShareButton>
          </div>
        </div>
      </div>
    </div>
  );
}
