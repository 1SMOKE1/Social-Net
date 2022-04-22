import React from 'react';
import styles from './User.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
  return (
    <NavLink to={props.to} className={styles.user}>
      {props.userAge} {props.userName} 
    </NavLink>
  );
}

export default User;
