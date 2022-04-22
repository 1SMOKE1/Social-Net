import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

let isActive = () => link => link.isActive ? styles.active : styles.link;

const NavBar = (props) => {
  let createLinks = props.state.links
  .map (link => 
  <div key={link.id}>
    <NavLink className={isActive()} id={link.id} key={link.id} to={link.to}>
      {link.linkText}
    </NavLink>
  </div>
  )
  return (
    <nav className={styles.nav}>
      {createLinks}
    </nav>
  );
}

export default NavBar;
