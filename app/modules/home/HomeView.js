import React from 'react';
import { View, Text } from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = EStylesheet.create({
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

export const HomeView = () =>
  <View style={styles.container}>
    <Icon name="rocket" size={50} style={styles.icon} />
    <Text style={styles.welcome}>Welcome To</Text>
    <Text style={styles.welcome}>React-Native-Boilerplate</Text>
  </View>;
