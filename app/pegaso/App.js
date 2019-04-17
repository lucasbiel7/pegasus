import React from "react";
import { createAppContainer } from "react-navigation";
import Routing from "./App.routing";

const AppContainer = createAppContainer(Routing);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
