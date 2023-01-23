import React from "react";
import {observer} from "mobx-react-lite";
import BoardContainer from "./containers/board";
import LaunchButton from "./components/launch";
import ScoreContainer from "./containers/score";

const App = () => {
  return  (
      <div className="fifteen-puzzle">
        <BoardContainer />
        <LaunchButton onClick={() => {}} />
        <ScoreContainer />
      </div>
  )
};

export default observer(App);
