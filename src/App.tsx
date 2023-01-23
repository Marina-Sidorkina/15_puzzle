import React from "react";
import {observer} from "mobx-react-lite";
import BoardContainer from "./containers/board";
import Launch from "./components/launch";
import ScoreContainer from "./containers/score";
import Layout from "./components/layout";

const App = () => {
  return  (
    <Layout>
      <BoardContainer />
      <Launch onClick={() => {}} />
      <ScoreContainer />
    </Layout>
  )
};

export default observer(App);
