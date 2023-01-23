import React, {useEffect, useMemo} from "react";
import timerState from "../../store/timerState";
import { observer } from "mobx-react-lite";
import {getFormattedTime} from "../../utils";
import Score from "../../components/score";
import counterState from "../../store/counterState";

const ScoreContainer = () => {
  useEffect(() => {
    const timerIndex = setInterval(() => timerState.increaseTimer(), 1000);

    return () => clearInterval(timerIndex);

  }, []);

  const timerValue = useMemo(() => {
    return getFormattedTime(
        timerState.secondsPassed,
        timerState.minutesPassed,
        timerState.hoursPassed
    );
  }, [timerState.secondsPassed, timerState.minutesPassed, timerState.hoursPassed])

  return <Score timerValue={timerValue} counterValue={counterState.movesCount}/>

}

export default observer(ScoreContainer);
