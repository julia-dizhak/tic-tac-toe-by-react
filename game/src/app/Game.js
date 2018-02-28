import React, { Component } from 'react';
import Board from './../widgets/Board';

export default class Game extends Component {
    state = {
        history: [{
            squares: Array(9).fill(null)
        }],
        xIsNext: true
    }

    handleClick(i) {
        const history = this.state.history,
        current = history[history.length - 1],
        squares = [...current.squares]; // to copy the squares array instead of mutating the existing array
        
        // ignore the click if someone has already won the game or if a square is already filled
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
              squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
        });
    } 

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
        
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        const history = this.state.history,
        current = history[history.length - 1],
        winner = this.calculateWinner(current.squares),
        moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>  
                </li>
            );
        });

        let status;

        if (winner) {
            status = 'Winner is ' + winner;
        } else {
            status = 'Next player is ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className='container'>
                    <div className='game'>
                        <div className='game-board'>
                            <Board 
                                squares={current.squares}
                                onClick={(i) => this.handleClick(i)}

                            />
                        </div>
                        <div className='game-info'>
                            <div>{ status }</div>
                            <ol>{ moves }</ol>
                        </div>
                    </div>
            </div>       
        )
    }
}
  