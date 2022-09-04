import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles.module.css'; 
export default function NavBar(props)
{
  return (
  <ul>
  {
    props.loginStatus ? <h1 className={styles.circle} onClick={() => props.setLoginStatus(false)}> <p> D </p> </h1> :
      <button className={styles.signbutton} type="button" onClick={() => props.setIsLoginPage(true)}>Sign in</button>
  }
    <li><a href="#grid"><img className={styles.grid} src="./static/grid.png" title="Google apps"/></a></li>
    <li><a href="#images">Images</a></li>
    <li><a href="#gmail">Gmail</a></li>
  </ul>);
}