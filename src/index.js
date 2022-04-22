import "./index.css";
import store from './redux/reduxStore'

// addPost('Js the best')

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


// addPost('Js the best')

let container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

let reRenderEntireTree = (state) => {
  root.render(
    <App
      store={store}
      dispatch={store.dispatch.bind(store)}
      // updatePostText={store.updatePostText.bind(store)}
      // addMessageAnton={store.addMessageAnton.bind(store)}
      // addMessageYaroslav={store.addMessageYaroslav.bind(store)}
      // addMessageDarina={store.addMessageDarina.bind(store)}
      // updateMessageText={store.updateMessageText.bind(store)}
    />
  );
}
reRenderEntireTree(store.getState());

store.subscribe(() => {
  reRenderEntireTree(store.getState())
});
