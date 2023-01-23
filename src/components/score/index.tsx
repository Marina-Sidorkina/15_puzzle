import React from "react";
import "./index.scss";

const Score = (props: { children: React.ReactNode }) => {
  return <div className="score">{props.children}</div>;
}

export default React.memo(Score);
