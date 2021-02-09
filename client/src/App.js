import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { CssBaseline } from '@material-ui/core';
import Users from './components/Users';

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Users />
    </Provider>
  );
};

export default App;