import React, { Component } from 'react';
import { View, Text, Image, NativeModules, Platform, } from 'react-native';
import { Container, Content, Button } from 'native-base';
import styles from '../styles/AppStyles';



const isIOS = Platform.OS === 'ios';

const lang = isIOS ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;

export default class Home extends Component {

  render() {
    var style =  lang === 'fa_IR' ? {flexDirection : 'row-reverse'} : {flexDirection : 'row'};
    return (
      <Container>
        <Content>
          <Image source={require("../image/Header/Asan-Pardakht.jpg")} style={styles.imgHome} />
          <Text style={styles.textTitle}>شرکت آسان پرداخت</Text>
          <Text style={styles.textContent}>به خانواده ۲۵میلیونی شرکت آسان پرداخت خوش آمدید</Text>
          <View style={[styles.viewHome , style]}>
            <Button success onPress={() => this.props.navigation.navigate("LogIn")} style={styles.buttonViewHome}>
              <Text style={styles.textLogin}>ثبت نام</Text>
            </Button>
            <Button success onPress={() => this.props.navigation.navigate("Drawer")} style={styles.buttonViewHome}>
              <Text style={styles.textLogin}>ورود</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
//viewHome