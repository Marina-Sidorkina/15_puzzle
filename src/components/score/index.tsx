import React from "react";
import "./index.scss";

const Score = (props: {timerValue: string; counterValue: number}) => {
  return (
    <div className="score">
      <div className="score-item score-item_timer">{props.timerValue}</div>
      <div className="score-item score-item_counter">{props.counterValue}</div>
    </div>
  );
}

export default React.memo(Score);
