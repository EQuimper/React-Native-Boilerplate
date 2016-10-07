import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from './constants/Colors';

// For get your colors global
EStyleSheet.build(Colors);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$blueColor'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  }
});

export const Root = () =>
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome To the React-Native-Boilerplat</Text>
  </View>;

