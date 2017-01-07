import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  render() {
    return (
      <div class='row'>
        <Square />
        <Square />
        <Square />
      </div>
    );
  }
}
