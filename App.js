import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import EzTalks from './src/components/EzTalks';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to #eztalks 3!</Text>
        <Text style={styles.instructions}>To get started, let's do a component</Text>
        <EzTalks title="#ezdevs" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
