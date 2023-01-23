import React from "react";
import "./index.scss";

const Timer = (props: {timeValue: string}) => {
  return <div className="timer">{props.timeValue}</div>;
}

export default React.memo(Timer);
