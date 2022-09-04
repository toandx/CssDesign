import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';
export default function FormInput(props) {
  function signIn()
  {
    props.setLoginStatus(true);
    props.setIsLoginPage(false);
  }
  return (
    <div>
      <div className={styles.inputBox}>
        <input type="email" name="email"/>
        <label>Username</label>
      </div>
      <div className={styles.inputBox}>
        <input type="text" name="text"/>
        <label>Password</label>
      </div>
      <button className={styles.link} onClick={() => signIn()} > Click </button>
    </div>
  );

}
