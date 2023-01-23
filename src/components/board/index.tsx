import React from "react";
import "./index.scss";

type TProps = {
  elements: Array<number>;
  render: Function;
}

const Board = (props: TProps) => {
  return (
      <div className="board">
        {props.elements.map((item, index) => props.render(item, index))}
      </div>
  );
}

export default React.memo(Board);
