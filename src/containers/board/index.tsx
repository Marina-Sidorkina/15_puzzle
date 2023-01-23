import React, {useCallback} from "react";
import { observer } from "mobx-react-lite";
import board from "../../store/boardState";
import counter from "../../store/counterState";
import Tile from "../../components/tile";
import Board from "../../components/board";
import { v4 as uuidv4 } from 'uuid';
import {checkMoveAbility} from "../../utils";

const BoardContainer = () => {
  const callbacks = {
    onTileClick: useCallback((tileIndex: number, tileValue: number) => {
      const isMovable = checkMoveAbility(tileIndex, board.emptyIndex);
      if(isMovable) {
        board.replaceTiles(tileIndex, tileValue);
        counter.increaseCounter();
      }
    }, [board.emptyIndex]),
  };

  const renders = {
    tile: useCallback((item: number, index: number) => (
      <Tile key={uuidv4()}
            tileValue={item}
            tileIndex={index}
            emptyTileIndex={board.emptyIndex}
            onClick={callbacks.onTileClick}/>
    ), [board.emptyIndex]),
  }

  return <Board elements={board.tiles} render={renders.tile}/>;
}

export default observer(BoardContainer);
