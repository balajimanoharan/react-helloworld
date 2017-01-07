import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
  constructor(props) {
      super(props);
      this.state = {
        currentPlayer: 0
      };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        currentPlayer: prevState.currentPlayer? 0: 1
      };
    });
  }

  render() {
    return (
      <div className='board' onClick={this.handleClick}>
        <div className='row'>
          <Square player={this.state.currentPlayer} />
          <Square player={this.state.currentPlayer} />
          <Square player={this.state.currentPlayer} />
        </div>
        <div className='row'>
          <Square player={this.state.currentPlayer} />
          <Square player={this.state.currentPlayer} />
          <Square player={this.state.currentPlayer} />
        </div>
        <div className='row'>
          <Square player={this.state.currentPlayer} />
          <Square player={this.state.currentPlayer} />
          <Square player={this.state.currentPlayer} />
        </div>
      </div>
    );
  }
}
