import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import AppLayout from "../components/AppLayout";
import { Provider } from "react-redux";
import { createStore } from "redux";
import withRedux from "next-redux-wrapper";
import reducer from "../reducers";

const App = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>React - SNS</title>
        <link rel="shortcut icon" href="../static/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object
};

export default withRedux((initialState, options) => {
  const store = createStore(reducer, initialState);
  const middlewares = [];
  return store;
})(App);
