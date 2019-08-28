import React from 'react';
import Minesweeper from "../minesweeper.js";

import Tile from "./tile.jsx";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="board">
        {this.props.board.grid.map((row, idx1) => {
          return <div className="board-row" key={idx1}>{row.map((tile, idx2) => {
            return <Tile key={`${idx1}-${idx2}`} tile={tile} updateGame={this.props.updateGame}/>
          })}</div>
        })}
      </div>
    )
  }
}