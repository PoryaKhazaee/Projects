import React, { Component } from 'react';
import { Text } from 'react-native';
import Navigator from './src/Navigator/Navigator';

export default class App extends Component {
  componentWillMount(){
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Navigator/> 
    );
  }
}