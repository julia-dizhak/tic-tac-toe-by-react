import React, { Component } from 'react';

export default class Square extends Component {
  render() {
    const { value } = this.props;

    return (
      <button className='square'>
          { value }
      </button>
    )
  }
}