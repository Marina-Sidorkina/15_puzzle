import React from "react";
import "./index.scss";

const LaunchButton = (props: {onClick: Function}) => {
  return (
      <button className="launch" onClick={ () => props.onClick() }>
        <span className="launch-text">Начать игру</span>
      </button>
  );
}

export default React.memo(LaunchButton);
