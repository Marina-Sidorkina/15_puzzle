import React, {useCallback} from "react";
import {observer} from "mobx-react-lite";
import BoardContainer from "./containers/board";
import Launch from "./components/launch";
import ScoreContainer from "./containers/score";
import Layout from "./components/layout";
import boardState from "./store/boardState";
import gameState from "./store/gameState";

const App = () => {
  const callbacks = {
    onLaunchClick: useCallback(() => {
      boardState.shuffleTiles();
      gameState.setInProcess(true);
    }, [])
  };

  return  (
    <Layout>
      <BoardContainer />
      <Launch onClick={callbacks.onLaunchClick} />
      <ScoreContainer />
    </Layout>
  )
};

export default observer(App);
