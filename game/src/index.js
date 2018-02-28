import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// export default class Square extends Component {
//   render() {
//     return (
//       <button className='square'>
//           TODO
//       </button>
//     )
//   }
// }

export default class Game extends Component {
  render() {
    return (
      <div className='game'>
        test
      </div>
    )
  }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
