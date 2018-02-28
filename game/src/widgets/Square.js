import React from 'react';

// Square no longer keeps its own state; it receives its value from its parent Board and informs its parent when it’s clicked. 
// We call components like this controlled components.
// functional component
export default function Square(props) {
    return (
      <button 
          className='square'
          onClick={props.onClick}>
          { props.value }
      </button>
    )
}