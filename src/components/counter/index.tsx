import React from "react";
import "./index.scss";

const Counter = (props: {movesCount: number}) => {
  return <div className="counter">{props.movesCount}</div>;
}

export default React.memo(Counter);
