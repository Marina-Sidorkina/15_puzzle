import React from "react";
import {observer} from "mobx-react-lite";
import BoardContainer from "./containers/board";
import TimerContainer from "./containers/timer";
import Score from "./components/score";
import LaunchButton from "./components/launch";
import Counter from "./components/counter";
import counterState from "./store/counterState";

const App = () => {
  return  (
      <div className="fifteen-puzzle">
        <BoardContainer />
        <LaunchButton onClick={() => {}} />
        <Score>
          <TimerContainer />
          <Counter movesCount={counterState.movesCount}/>
        </Score>
      </div>
  )
};

export default observer(App);
