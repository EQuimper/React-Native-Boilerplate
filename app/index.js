import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

export const Root = () =>
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome To the React-Native-Boilerplat</Text>
  </View>;

