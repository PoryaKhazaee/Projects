import React, { Component } from 'react';
import { View, Button, Text, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class Wifi extends Component {
  render() {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#5c5c5c', '#767676', '#5c5c5c']} style={{ flex: 1,justifyContent:"center", alignItems:"center", }}>
            <Text style={{ color:"red", fontSize: 50}}>ADSL</Text>
        </LinearGradient>
    );
  }
}