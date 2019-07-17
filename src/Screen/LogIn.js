import React, { Component } from 'react';
import { View, Text, TextInput, Platform, NativeModules, } from 'react-native';
import { Button, } from 'native-base';
import styles from '../styles/AppStyles';

const isIOS = Platform.OS === 'ios';
const lang = isIOS ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: " "
    }
  }

  render() {
    var style = lang === 'fa_IR' ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' };
    return (
      <View>
        <View style={styles.viewLogIn}>
          <TextInput style={styles.inputLogIn}
            onChangeText={(txt)=> {
              this.setState({
                userName: txt
              })
            }}
            placeholder="ایمیل خودراواردکنید" keyboardType={"email-address"} />
          <TextInput style={styles.inputLogIn} placeholder="رمزخودراواردکنید" keyboardType={'numeric'} />
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
