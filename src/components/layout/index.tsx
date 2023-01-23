import React from "react";
import "./index.scss";

const Layout = (props: {children: React.ReactNode}) => {
  return (
    <div className="puzzle">
      <div className="puzzle-container">
        {props.children}
      </div>
    </div>
  );
}

export default  React.memo(Layout);
