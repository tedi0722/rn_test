/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * 
 * 
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import AppContainer from './src/navigation/AppContainer';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
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
