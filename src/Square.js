import React, { Component } from 'react';

const players = [ 'X', 'O' ];

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      text: players[this.props.player]
    });
  }

  render() {
    return <span className='square' onClick={this.handleClick}>{this.state.text}</span>;
  }
}
