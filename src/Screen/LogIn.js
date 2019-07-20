import React, { Component } from 'react';
import { View, Text, TextInput, Platform, NativeModules, ScrollView, TouchableOpacity, } from 'react-native';
import { Button, } from 'native-base';
import styles from '../styles/AppStyles';

const isIOS = Platform.OS === 'ios';
const lang = isIOS ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: null,
      Password: null,
      validateUserName: false,
    }
  }

  validateUserName = () => {
    if (this.state.userName.length > 5) {
      this.setState({ validateUserName: true })
    } else {
      return
    }
  }
  render() {
    // this.validateUserName();
    var style = lang === 'fa_IR' ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' };
    return (
      <View>
        {
          this.state.validateUserName ? alert("valid username") : <View />
        }
        <View style={styles.viewLogIn}>
          <TextInput style={styles.inputLogIn}
            onChangeText={(userName) => {
              this.setState({
                userName
              })
            }}
            placeholder="نام کاربری خود راواردکنید"
            keyboardType={"email-address"}
            placeholderTextColor='green'
          />
          <TouchableOpacity style={styles.touchShow}>
            <Text style={styles.textShow}>show</Text>
          </TouchableOpacity>
          <TextInput style={styles.inputLogIn} placeholder="رمزخودراواردکنید"
            secureTextEntry={true}
            placeholderTextColor='green'
          />
          
        </View>
        <View style={[styles.viewHome, style]}>
          <Button success style={styles.buttonViewHome} onPress={() => alert(this.state.userName)} >
            <Text style={styles.textLogin}>ثبت</Text>
          </Button>
          <Button success style={styles.buttonViewHome} onPress={() => this.props.navigation.navigate("MainScreen")}>
            <Text style={styles.textLogin}>ورود</Text>
          </Button>
        </View>
      </View>
    );
  }
}
