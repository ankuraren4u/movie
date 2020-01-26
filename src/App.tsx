import React from "react";
import "./styles/App.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers";
import { Container } from "./containers/Container";
const appStore = createStore(reducer);
const App: React.FC = () => {
  return (
    <Provider store={appStore}>
      <Container />
    </Provider>
  );
};

export default App;
