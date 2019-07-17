import React, { Component } from 'react';
import { View, Text, TextInput, Platform, NativeModules, StyleSheet, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon } from 'native-base';

const isIOS = Platform.OS === 'ios';
const lang = isIOS ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;

export default class Mobile extends Component {
  render() {
    var style = lang === 'fa_IR' ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' };
    return (
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#5c5c5c', '#767676', '#5c5c5c']} style={{ flex: 1 }}>
        <View style={{ marginTop: 25, width: "80%", alignSelf: "center", fontFamily: "IRANSans", }}>
          <Text style={{ textAlign: "center", color: "white", fontFamily: "IRANSans", fontSize: 12 }}>شماره موبایلی که میخواهید برای آن بسته خریداری کنید را وارد و یا آیکون شماره موبایل خود را لمس کنید.</Text>
          <View style={[styles.viewMobile, style]}>
            <View style={styles.viewUsers}>
              <Icon type="FontAwesome5" name="users" />
            </View>
            <View style={[styles.viewInput, style]}>
              <View style={{ flex: 1, }}>
                <Icon style={{ textAlign: "center", color: "#00FA9A" }} type="FontAwesome5" name="mobile" />
              </View>
              <View style={{ flex: 4, alignItems: "center" }}>
                <TextInput placeholder="09xxxxxxxxx" keyboardType={'numeric'} />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 40, alignSelf: "center" }}>
            <Text style={{ color: "white", fontFamily: "IRANSans", fontSize: 12 }}>اپراتور شماره موبایل وارد شده راانتخاب کنید</Text>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  viewMobile: {
    flex: 1,
    flexDirection: "row",
    display: "flex",
    marginTop: 35,
  },
  viewUsers: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 7,
    alignItems: "center",
    alignSelf: "center",
    height: 40,
    justifyContent: 'center',
    margin: 3,
  },
  viewInput: {
    backgroundColor: "white",
    flex: 4,
    borderRadius: 7,
    alignItems: "center",
    alignSelf: "center",
    height: 40,
    justifyContent: 'center',
    margin: 3,
    flexDirection: "row-reverse",
  },
})