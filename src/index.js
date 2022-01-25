// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// import configureStore from "./store/store";
// const store = configureStore();

// ReactDOM.render(<App store={store} />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import CardDetail from "./pages/CardDetail";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/pepe" element={<Home />} />
        <Route path="/detail/:country" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
