import React from 'react';
import Board from './board.jsx';

import * as Minesweeper from '../minesweeper.js';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  tileText() {
    let tile = this.props.tile;
    let num = tile.adjacentBombCount();
    if (tile.flagged === true) {
      return "⚑";
    } else if (tile.explored === false) {
      return "";
    } else if (tile.explored && tile.bombed) {
      return "💣";
    } else if (tile.explored && num > 0) {
      return num;
    }
  }

  tileClass() {
    let klass = "tile";
    if (this.props.tile.flagged) {
      klass += " flagged";
    }
    if (this.props.tile.bombed) {
      klass += " bombed";
    }
    if (this.props.tile.explored) {
      klass += " explored";
    }
    return klass;
  }

  handleClick(e) {
    let tile = this.props.tile;
    this.props.updateGame(tile, e.altKey);
  }

  render() {
    return (
    <div className={this.tileClass()} onClick={this.handleClick}>{this.tileText()}</div>
    );
  }
}