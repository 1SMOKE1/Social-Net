import React from 'react';
import styles from './ProfileInfo.module.css';
import profile_bg from '../../../../../src/assets/main_content/profile_info_bg.jpg';

const ProfileInfo = () => {
  return (
    <div>
      <img className={styles.img}src={profile_bg}/>
      <div  className={styles.content}>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;
