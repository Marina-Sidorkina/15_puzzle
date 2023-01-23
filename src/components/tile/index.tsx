import React from "react";
import "./index.scss";

type TProps = {
  tileValue: number;
  tileIndex: number;
  emptyTileIndex: number;
  onClick: Function;
}

const Tile = (props: TProps) => {
  const check =  props.tileIndex === props.emptyTileIndex;
  let classValue = check ? 'tile-element tile-element_zero' : 'tile-element';

  return (
    <div className="tile" onClick={() => {props.onClick(props.tileIndex, props.tileValue)}}>
      <div className={classValue}>
        {check ? '' : props.tileValue}
      </div>
    </div>
  );
}

export default React.memo(Tile);
