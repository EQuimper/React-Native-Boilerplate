import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Router } from 'react-native-router-flux';

import store from './store';
import { scenes } from './routes';

import Colors from './constants/Colors';

// For get your colors global
EStyleSheet.build(Colors);

export const Root = () =>
  <Provider store={store}>
    <Router scenes={scenes} />
  </Provider>;

