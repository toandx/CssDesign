import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import styles from './styles.module.css';
function FormInput() {
  return (
    <form>
      <div class="inputBox">
        <input type="email" name="email" required onkeyup="this.setAttribute('value', this.value);" value="" />
        <label>Username</label>
      </div>
      <div class="inputBox">
        <input type="text" name="text" required onkeyup="this.setAttribute('value', this.value);" value="" />
        <label>Password</label>
      </div>
      <input type="submit" name="sign-in" value="Sign In" />
    </form>
  );

}
class HomePage extends React.Component {
  render() {
    return (
      <div class="box">
        <img class="logo" alt="Google" src="./static/google.png" />
        <h2>Sign in</h2>
        <p>Use your Google Account</p>
        <FormInput />
      </div>
    )
  }
}

ReactDOM.render(<HomePage />, document.getElementById('root'));
