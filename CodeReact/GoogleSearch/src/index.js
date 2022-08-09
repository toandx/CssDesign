import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import styles from './styles.module.css'; 
function MenuBar()
{
  return (
  <ul>
    <li><a href="#user"><button class="signbutton" type="button">Sign in</button></a></li>
    <li><a href="#grid"><img class="grid" src="./static/grid.png" title="Google apps"/></a></li>
    <li><a href="#images">Images</a></li>
    <li><a href="#gmail">Gmail</a></li>
  </ul>);
}
function SearchBox()
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
class HomePage extends React.Component {
  render() {
    return(
    <div>
      <MenuBar/>
      <SearchBox />
    </div>
    )
  }
}

ReactDOM.render(<HomePage />, document.getElementById('root'));
