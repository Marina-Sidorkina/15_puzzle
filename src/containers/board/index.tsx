import React, {useCallback} from "react";
import { observer } from "mobx-react-lite";
import {checkMoveAbility, checkNumbersOrder} from "../../utils";
import { v4 as uuidv4 } from 'uuid';
import Tile from "../../components/tile";
import Board from "../../components/board";
import boardState from "../../store/boardState";
import gameState from "../../store/gameState";

const BoardContainer = () => {
  const callbacks = {
    onTileClick: useCallback((tileIndex: number, tileValue: number) => {
      const isMovable = checkMoveAbility(tileIndex, boardState.emptyIndex);

      if(isMovable && gameState.inProcess) {
        boardState.replaceTiles(tileIndex, tileValue);
        gameState.increaseCounter();

        if(checkNumbersOrder(boardState.tiles)) {
          gameState.setWinner();
          gameState.setInProcess(false);
        }
      }
    }, [boardState.emptyIndex])
  };

  const renderTile = useCallback((item: number, index: number) => (
    <Tile key={uuidv4()}
          tileValue={item}
          tileIndex={index}
          emptyTileIndex={boardState.emptyIndex}
          onClick={callbacks.onTileClick}
          inProcess={gameState.inProcess}/>
  ), [boardState.emptyIndex]);

  return <Board elements={boardState.tiles} render={renderTile}/>;
}

export default observer(BoardContainer);
