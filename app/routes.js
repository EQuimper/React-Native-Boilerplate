import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import { HomeView } from './modules/home/HomeView';

export const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={HomeView} title="Home" />
  </Scene>
);
