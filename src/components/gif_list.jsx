import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  constructor(props) {
    super(props);

    // this.chooseGif = this.chooseGif.bind(this);

    this.state = {
      selectedGifId: null
    }
  }

  handleClick = (id) =>  {
    this.setState({
      selectedGifId: id
    })
    this.props.sendGif(id);
  }
  

  renderList = () => {
    return this.props.gifs.map(gif => <Gif selectedGif={this.handleClick} id={gif.id} key={gif.id} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
