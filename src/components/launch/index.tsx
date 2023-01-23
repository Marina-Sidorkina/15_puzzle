import React from "react";
import "./index.scss";

const Launch = (props: {onClick: Function}) => {
  return (
    <div className="launch" onClick={ () => props.onClick() }>
      <button className="launch-button">Начать игру</button>
    </div>
  );
}

export default React.memo(Launch);
