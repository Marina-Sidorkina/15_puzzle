import React from "react";
import "./index.scss";

const Reset = (props: {onClick: Function}) => {
  return <div className="reset" onClick={() => props.onClick()}>СБРОСИТЬ</div>
}

export default Reset;
