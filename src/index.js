import { Provider } from "react-redux";
import thunk from "redux-thunk";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./styles/index.css";
import reducers from "./utils/redux/reducers";
import { applyMiddleware, compose, createStore } from "redux";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
