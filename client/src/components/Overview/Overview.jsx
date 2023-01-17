import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AddCart from './ovComponents/addCart.jsx';
import Gallery from './ovComponents/gallery.jsx';
import Info from './ovComponents/info.jsx';
import StyleSelect from './ovComponents/styleSelect.jsx';

var Overview = () => {

  //add the useState parameters here
  //use a true/false state?

  //add the axios get here

  //useEffect calling the get here

  //add return/render here
  return (
    <div>
      <div>OVERVIEW IS RENDERING </div>
      <div><AddCart/></div>
      <div><Gallery/></div>
      <div><Info/></div>
      <div><StyleSelect/></div>
    </div>
  )

}

export default Overview;