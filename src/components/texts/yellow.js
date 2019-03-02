import React, { Component } from 'react';
import TextData from './works.json';

class LoadText extends Component {

  render (){
    console.log(TextData);
    return(
      <div>{TextData.text}</div>
    )
  }
}

export default LoadText;

