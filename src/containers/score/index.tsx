import React, {useEffect, useMemo} from "react";
import {observer} from "mobx-react-lite";
import {getFormattedTime} from "../../utils";
import Score from "../../components/score";
import gameState from "../../store/gameState";

const ScoreContainer = () => {
  useEffect(() => {
    let timerIndex: NodeJS.Timer;

    if (gameState.inProcess) timerIndex = setInterval(() => gameState.increaseTimer(), 1000);

    return () => clearInterval(timerIndex);
  }, [gameState.inProcess]);

  const timerValue = useMemo(() => {
    return getFormattedTime(
      gameState.secondsPassed,
      gameState.minutesPassed,
      gameState.hoursPassed
    );
  }, [gameState.secondsPassed, gameState.minutesPassed, gameState.hoursPassed])

  return <Score timerValue={timerValue} counterValue={gameState.movesCount}/>
}

export default observer(ScoreContainer);
