import React from "react";
import "./index.scss";

const Result = (props: {result: string; moves: number}) => {
  return (
    <div className="result">
      <div className="result-item">{`Кол-во ходов: ${props.moves}`}</div>
      <div className="result-item">{`Время: ${props.result}`}</div>
    </div>
  );
}

export default React.memo(Result);
