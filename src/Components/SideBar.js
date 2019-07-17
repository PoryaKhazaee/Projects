import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, NativeModules, Platform, } from 'react-native';
import { Container, Content, Button, Icon } from 'native-base';


const isIOS = Platform.OS === 'ios';
const lang = isIOS ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;


export default class SideBar extends Component {
  render() {
    var style = lang === 'fa_IR' ? { flexDirection: 'row' } : { flexDirection: "row-reverse" };
    return (
      <View style={{ flex: 1, }}>
        <View style={{ flex: 1, }}>
          <Image source={require("../image/Header/Asan-Pardakht.jpg")} resizeMode="cover" style={{ width: '100%', height: '100%' }} />
        </View>
        <View style={styles.wraperSideBar}>
          <View style={[styles.viewSideBar, style]}>
            <View style={[styles.viewRight, style]}>
              <Icon type="FontAwesome5" name="receipt" style={styles.viewRightIcon} />
            </View>
            <View style={[styles.viewLeft, style]}>
              <Text style={styles.viewLeftText}>لیست تراکنشها</Text>
            </View>
          </View>
          <View style={[styles.viewSideBar, style]}>
            <View style={[styles.viewRight, style]}>
              <Icon type="FontAwesome5" name="download" style={styles.viewRightIcon} />
            </View>
            <View style={[styles.viewLeft, style]}>
              <Text style={styles.viewLeftText}>صندوق پیام و پاسخ</Text>
            </View>
          </View>
          <View style={[styles.viewSideBar, style]}>
            <View style={[styles.viewRight, style]}>
              <Icon type="FontAwesome5" name="wallet" style={styles.viewRightIcon} />
            </View>
            <View style={[styles.viewLeft, style]}>
              <Text style={styles.viewLeftText}>کیف پول</Text>
            </View>
          </View>
          <View style={[styles.viewSideBar, style]}>
            <View style={[styles.viewRight, style]}>
              <Icon type="FontAwesome5" name="laptop" style={styles.viewRightIcon} />
            </View>
            <View style={[styles.viewLeft, style]}>
              <Text style={styles.viewLeftText}>منو پذیرندگان</Text>
            </View>
          </View>
          <View style={[styles.viewSideBar, style]}>
            <View style={[styles.viewRight, style]}>
              <Icon type="FontAwesome5" name="clock" style={styles.viewRightIcon} />
            </View>
            <View style={[styles.viewLeft, style]}>
              <Text style={styles.viewLeftText}>یادآوری</Text>
            </View>
          </View>
          <View style={[styles.viewSideBar, style]}>
            <View style={[styles.viewRight, style]}>
              <Icon type="FontAwesome5" name="address-card" style={styles.viewRightIcon} />
            </View>
            <View style={[styles.viewLeft, style]}>
              <Text style={styles.viewLeftText}>مدیریت کارت ها</Text>
            </View>
          </View>
          <View style={[styles.viewSideBar, style]}>
            <View style={[styles.viewRight, style]}>
              <Icon type="FontAwesome5" name="cog" style={styles.viewRightIcon} />
            </View>
            <View style={[styles.viewLeft, style]}>
              <Text style={styles.viewLeftText}>تنظیمات</Text>
            </View>
          </View>
          <View style={[styles.viewSideBar, style]}>
            <View style={[styles.viewRight, style]}>
              <Icon type="FontAwesome5" name="question-circle" style={styles.viewRightIcon} />
            </View>
            <View style={[styles.viewLeft, style]}>
              <Text style={styles.viewLeftText}>راهنما</Text>
            </View>
          </View>
          <View style={[styles.viewSideBar, style]}>
            <View style={[styles.viewRight, style]}>
              <Icon type="FontAwesome5" name="exclamation" style={styles.viewRightIcon} />
            </View>
            <View style={[styles.viewLeft, style]}>
              <Text style={styles.viewLeftText}>درباره ما</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wraperSideBar: {
    flex: 4,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
  },
  viewSideBar: {
    flexDirection: "row",
    borderBottomColor: "#9e9e9e",
    borderBottomWidth: 1,
    padding: 9,
  },
  viewRight: {
    flex: 1,
    justifyContent: "center",
  },
  viewLeft: {
    flex: 4,
    justifyContent: "center",
  },
  viewRightIcon: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  viewLeftText: {
    width: "100%",
    fontFamily: "IRANSans",
    color: "white",
    padding: "3%",
    fontSize: 13,
  },
})
