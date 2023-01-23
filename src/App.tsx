import React, {useCallback} from "react";
import {observer} from "mobx-react-lite";
import BoardContainer from "./containers/board";
import Launch from "./components/launch";
import ScoreContainer from "./containers/score";
import Layout from "./components/layout";
import boardState from "./store/boardState";
import gameState from "./store/gameState";
import Reset from "./components/reset";

const App = () => {
  const callbacks = {
    onLaunchClick: useCallback(() => {
      boardState.shuffleTiles();
      gameState.setInProcess(true);
    }, []),
    onResetClick: useCallback(() => {
      gameState.reset();
      boardState.resetTiles();
    }, [])
  };

  return  (
    <Layout>
      <BoardContainer />
      <Launch onClick={callbacks.onLaunchClick} />
      <ScoreContainer />
      <Reset onClick={callbacks.onResetClick}/>
    </Layout>
  )
};

export default observer(App);
