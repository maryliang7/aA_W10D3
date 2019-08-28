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
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, flag) {
    if (flag) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({board: this.state.board});
    // if (this.state.board.lost()) alert("you lost");
  }

  restartGame() {
    this.setState({board: new Minesweeper.Board(15, 30)});
  }

  render() {
    return (
    <div className="game">
      <h1>minesweeper</h1>
      <h2>explore with click • flag with alt+click • flag all the mines</h2>
      <Board board={this.state.board} updateGame={this.updateGame}/>
      <div className={this.state.board.lost() || this.state.board.won() ? "modal" : "modal hidden"}>
        <div className="alert">
          <h3>{this.state.board.lost() ? "you lost." : "you won!"}</h3>
          <button className="restart-button" onClick={this.restartGame}>play again</button>
        </div>
      </div>
    </div>
    )
  }
}