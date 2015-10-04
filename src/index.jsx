import "assets/index.html";
import "babel-core/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { compose, createStore, applyMiddleware } from "redux";
import { devTools, persistState } from "redux-devtools";
import { DevTools, DebugPanel, LogMonitor } from "redux-devtools/lib/react2";
import { Provider } from "react-redux";
import App from "./app";
import karta from "./reducers";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";

const loggerMiddleware = createLogger();

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  // devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(karta);
    // <DebugPanel top right bottom>
    //   <DevTools store={store} monitor={LogMonitor} />
    // </DebugPanel>

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById("root")
);
