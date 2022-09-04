import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles.module.css'; 
export default function SearchForm(props)
{
  return(
  <div className={styles.searchContainer}>
    <div className={styles.logo}>
      <img alt="Google" src="./static/google.png" />
    </div>
    <div className={styles.bar}>
      <input id="searchbar" className={styles.searchbar} type="text" title="Search" />
      <a href="#"> <img className={styles.voice} src="./static/voice.png" /></a>
    </div>
    <div className={styles.buttons}>
      <button className={styles.button} type="button">Google Search</button>
      <button className={styles.button} type="button">I'm Feeling Lucky</button>
    </div>
  </div>);
}