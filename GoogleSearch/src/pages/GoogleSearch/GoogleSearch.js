import React, { useState } from 'react';
import './styles.css';
import NavBar from '../../components/NavBar/NavBar.js';
import SearchForm from '../../components/SearchForm/SearchForm.js';

export default function GoogleSearch(props) {
  return(
    <div className="root">
      <NavBar {...props}/>
      <SearchForm/>
    </div>
    );
}