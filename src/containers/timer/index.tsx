import React, {useEffect, useMemo} from "react";
import timerState from "../../store/timerState";
import { observer } from "mobx-react-lite";
import {getFormattedTime} from "../../utils";
import Timer from "../../components/timer";

const TimerContainer = () => {
  useEffect(() => {
    const timerIndex = setInterval(() => timerState.increaseTimer(), 1000);

    return () => clearInterval(timerIndex);

  }, []);

  const time = useMemo(() => {
    return getFormattedTime(
        timerState.secondsPassed,
        timerState.minutesPassed,
        timerState.hoursPassed
    );
  }, [timerState.secondsPassed, timerState.minutesPassed, timerState.hoursPassed])

  return <Timer timeValue={time}/>

}

export default observer(TimerContainer);
