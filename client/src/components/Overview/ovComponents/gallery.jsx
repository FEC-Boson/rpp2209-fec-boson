import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SinglePic from './singlePic.jsx';
import { ImCircleRight, ImCircleLeft } from 'react-icons/im';

var Gallery = (props) => {
  //confirm if props are being passed down
  console.log(props.pics)

  const [snapshot, setSnapshot] = useState(null);
  const [indices, setIndices] = useState([]);
  const [length, setLength] = useState(0);


  useEffect(() => {
    setLength(props.pics.length);
    setSnapshot(props.pics.slice(0, 5));
    setIndices([0, 5]);

  }, []);

  var shiftLeft = () => {
    var copy = props.pics.slice();
    if (copy.length > 3 && copy[indices[0] - 1] !== undefined) {
      setIndices([indices[0] - 1, indices[1] - 1]);
      setSnapshot(copy.slice(indices[0] - 1, indices[1] - 1));
    }
  };

  var shiftRight = () => {
    var copy = props.pics.slice();
    if (copy.length > 3 && copy[indices[1] + 1] !== undefined) {
      setIndices([indices[0] + 1, indices[1] + 1]);
      setSnapshot(copy.slice(indices[0] + 1, indices[1] + 1));
    }
  };


  var thumbnail = props.pics[0].thumbnail_url;
  var url = props.pics[0].url;
  var id = 0;

  return (
    <div className="gallery">
      <strong>Image Gallery</strong>
      {props.pics.map(block => {
        return (
          <SinglePic full={block.url} thumb={block.thumbnail_url} key={id += 1}
            setBigPic={props.setBigPic} setWindowPic={props.setWindowPic} />
        )
      })}
    </div>
  )

}

export default Gallery;