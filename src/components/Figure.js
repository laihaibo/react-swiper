import React, {Component} from 'react';

class Figure extends Component {
  render() {
    return (
      <figure>
        <img src={this.props.imgURL} alt={this.props.tittle}/>
        <figcaption>{this.props.fileName}</figcaption>
      </figure>
    );
  }
}

export default Figure;