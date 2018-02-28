import React, { Component } from 'react';

// Square no longer keeps its own state; it receives its value from its parent Board and informs its parent when it’s clicked. 
// We call components like this controlled components.
export default class Square extends Component {
  render() {
    return (
      <button 
          className='square'
          onClick={() => this.props.onClick()}>
          { this.props.value }
      </button>
    )
  }
}