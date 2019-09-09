import React, { Component } from 'react';

class Gif extends Component {
  
  chooseGif = () => {
  let id = this.props.id
  this.props.selectedGif(id);
  }

  render() {
    const source = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={source} alt="" className="gif" onClick={this.chooseGif}/>
    );
  }
}

export default Gif;
