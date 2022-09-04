import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';
import FormInput from './FormInput.js';
export default function Login(props){
  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <img className={styles.logo} alt="Google" src="./static/google.png" />
        <h2>Sign in</h2>
        <p>Use your Google Account</p>
        <FormInput {...props}/>
      </div>
    </div>
  )
}
