import React, {useCallback, useMemo} from "react";
import {observer} from "mobx-react-lite";
import BoardContainer from "./containers/board";
import Launch from "./components/launch";
import ScoreContainer from "./containers/score";
import Layout from "./components/layout";
import boardState from "./store/boardState";
import gameState from "./store/gameState";
import Reset from "./components/reset";
import Result from "./components/result";

const App = () => {
  const callbacks = {
    onLaunchClick: useCallback(() => {
      if(!gameState.inProcess) {
        boardState.shuffleTiles();
        gameState.reset();
        gameState.setInProcess(true);
      }
    }, []),
    onResetClick: useCallback(() => {
      gameState.reset();
      boardState.resetTiles();
    }, [])
  };

  const result = useMemo(() => {
    return `${gameState.hoursPassed} ч. ${gameState.minutesPassed} мин. ${gameState.secondsPassed} сек.`
  }, [gameState.hoursPassed, gameState.minutesPassed, gameState.secondsPassed]);

  return  (
    <Layout>
      {gameState.winner
          ? <Result moves={gameState.movesCount} result={result}/>
          : <BoardContainer />}
      <Launch onClick={callbacks.onLaunchClick} />
      <ScoreContainer />
      <Reset onClick={callbacks.onResetClick}/>
    </Layout>
  )
};

export default observer(App);
