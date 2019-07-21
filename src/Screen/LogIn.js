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
      validEmail: false,
      validPassword: false,
      emailAddress: "",
      Password: "",
    }
  }
  // var age =18;
    //const age = 18;

  handleEmailChange = (email) => {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//Regular Expression
    const { validEmail } = this.state; // const validEmail = this.state.validEmail;
    this.setState({ emailAddress: email });

    
    if (!validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({ validEmail: true });
      }
    } else if (!emailCheckRegex.test(email)) {
      this.setState({ validEmail: false });
    }
  }

  handlePasswordChange = (Password) => {
    const { validPassword } = this.state;
    this.setState({ Password });
    if (!validPassword) {
      if (Password.length > 5) {
        this.setState({ validPassword: true });
      }
    } else if (Password.length < 5) {
      this.setState({ validPassword: false })
    }
  }

  toggleBtn = () => {
    if (this.state.validEmail && this.state.validPassword) {
      return true;
    } else {
      return false;
    }
  }

  login = () => {
    if (this.state.emailAddress === "App@gmail.com" && this.state.Password === "123456") {
      setTimeout(() => {
        this.props.loginUser(this.state.emailAddress, this.state.Password);
        this.setState({ emailAddress: "", Password: "", validEmail: false, validPassword: false })
        this.props.navigation.navigate("MainScreen");
      }, 700)
    } else {
      setTimeout(() => {
        this.setState({ emailAddress: "", Password: "", validEmail: true, validPassword: true })
        Alert.alert(
          "ورود به آپ",
          "ایمیل یا رمزعبور وارد شده صحیح  نمی باشد",
          [
            { text: "باشه" }
          ]

        )
      }, 500)
    }
  }

  render() {

    var style = lang === 'fa_IR' ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' };
    return (
      <View>
        <View style={styles.viewLogIn}>
          <TextInput style={styles.inputLogIn}
            type="email"
            onChangeText={this.handleEmailChange}
            showCheckMark={this.state.validEmail}
            placeholder="ایمیل"
            keyboardType={"email-address"}
            placeholderTextColor='green'
          />
          <TextInput style={styles.inputLogIn} placeholder="رمزخودراواردکنید"
            type="Password"
            onChangeText={this.handlePasswordChange}
            showCheckMark={this.state.validPassword}
            secureTextEntry={true}
            placeholder="رمز عبور"
            placeholderTextColor='green'
          />

        </View>
        <View style={[styles.viewHome, style]}>
          <Button success style={[styles.buttonViewHome, !(this.toggleBtn()) ? { opacity: 0.7 } : {}]} disabled={!(this.toggleBtn())} onPress={this.login} >
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
const mapStateToProps = (state)=>{
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
      loginUser : (email , password) => {dispatch(loginUser(email , password))}
  }
}
  //validateUserName: false,
  // validateUserName = () => {
  //   if (this.state.userName.length > 5) {
  //     this.setState({ validateUserName: true })
  //   } else {
  //     return
  //   }
  // }
  // this.validateUserName();


  //     onChangeText={(userName) => {
    //this.setState({
     // userName
   // })
  //}}

