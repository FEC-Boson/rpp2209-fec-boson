import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

var Info = (props) => {
  //confirm if props are being passed
  // const [prodInfo, setInfo] = useState([]);
  console.log('info props', props.info)
  var single = props.info;


  // add return/render here
  if (props === undefined) {
    return (
      <div>loading</div>
    )
  } else {
  return (
    <div>
      <h2>{single[0].name}</h2>
      <div>{single[0].category}</div>
      <div>${single[0].default_price}</div>
      <div>{single[0].slogan}</div>
      <button onClick={() => {alert('Added to you styles')}}>STAR</button>
    </div>
  )
  }
}

export default Info;

/*
return (
  <div>
    <div>{props.things.category}</div>
    <div>{props.things.name}</div>
    <div>{props.things.default_price}</div>
    <button onClick={() => {alert('Added to you styles')}}>STAR</button>
  </div>
  // <div>{props.things.default_price}</div>


    // var infoFetcher = function(id) {
  //   axios.get('/products' + '/' + id)
  //   .then (data => {
  //     console.log('infodata', info)
  //   })
  //   .catch(err => console.log(err))
  //   console.log('sad trombone noises')
  // }

  // useEffect to call the fetcher
//infoFetcher(71701)
)

    // return (
    //   <div>
    //     <h2>{data.data.name}</h2>
    //     <div>{data.data.category}</div>
    //     <div>${data.data.default_price}</div>
    //     <div>{data.data.slogan}</div>
    //     <button onClick={() => {alert('Added to you styles')}}>STAR</button>
    //   </div>
    // )
*/