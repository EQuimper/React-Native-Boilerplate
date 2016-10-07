import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';

import store from './store';

import Colors from './constants/Colors';

// For get your colors global
EStyleSheet.build(Colors);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$lightBlue'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '$whiteColor',
    fontWeight: 'bold'
  },
  icon: {
    color: '$redColor'
  }
});

const Root = () =>
  <View style={styles.container}>
    <Icon name="rocket" size={50} style={styles.icon} />
    <Text style={styles.welcome}>Welcome To</Text>
    <Text style={styles.welcome}>React-Native-Boilerplate</Text>
  </View>;

export const index = () =>
  <Provider store={store}>
    <Root />
  </Provider>;

