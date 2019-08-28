import React from 'react';

import Board from './board.jsx';
import Tile from './tile.jsx';

import * as Minesweeper from '../minesweeper.js';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(15, 30),
    };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {
    return (
    <div className="game">
      <Board board={this.state.board} updateGame={this.updateGame}/>
    </div>
    )
  }
}