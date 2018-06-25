import React from 'react';
import { Provider } from 'react-redux';
import MainNavigation from './src/MainNavigation';
import store from './src/config/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}
