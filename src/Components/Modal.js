import React, { Component } from 'react';
import { View, Text, ScrollView, Modal, Image, TouchableOpacity, NativeModules, Platform, StyleSheet } from 'react-native';
import {
  Icon
} from 'native-base';


const isIOS = Platform.OS === 'ios';
const lang = isIOS ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;


class CustomModal extends Component {
  render() {
    var style = lang === 'fa_IR' ? { flexDirection: 'row' } : { flexDirection: "row-reverse" };

    const { visible, close } = this.props;
    console.log(this.props.name)

    return (
      <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={() => { alert('Modal has been closed.'); }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 2, backgroundColor: "rgba(0, 0, 0, 0.55)" }}></View>
          <View style={{ flex: 6, }}>
            <View style={[styles.wraperModal]}>
              <View style={styles.viewTopHeader}>
                <View style={styles.viewContentHeader}>
                  <Icon type="FontAwesome5" name="exclamation" style={styles.iconHeader} />
                </View>
              </View>
              <View style={styles.viewContentModal}>
                <ScrollView>
                  <View style={[styles.viewDirection, style]}>
                    <View style={styles.viewRToL}>
                      <View style={styles.viewEmpty}></View>
                    </View>
                    <View style={styles.viewLeft}>
                      <Text style={styles.textHelp}>منوی اصلی نرم افزار</Text>
                    </View>
                  </View>
                  <Text style={styles.textCenter}>درمنوی اصلی امکانات موجود در نرم افزار آسان پرداخت قابل مشاهده است.</Text>
                  <Text style={styles.textCenter}>با لمس هرکدام ازآیتم ها واردصفحه مربوط به آن خواهید شد.</Text>
                  <Text style={styles.textCenter}>بالمس صفحه وکشیدن آن به چپ و راست میتوانید گزینه های بیشتری رامشاهده کنید.</Text>
                  <View style={[styles.viewDirection, style]}>
                    <View style={styles.viewRToL}>
                      <Icon type="FontAwesome5" name="bars" style={styles.iconBars} />
                    </View>
                    <View style={styles.viewLeft}>
                      <Text style={styles.textHelp}>آیکون منو</Text>
                    </View>
                  </View>
                  <Text style={styles.textCenter}>در بالای صفحه دکمه منو تعبیه گردیده است که با لمس آن منوی کشویی مربوط به تنظیمات راباز خواهد کرد.</Text>
                  <View style={[styles.viewDirection, style]}>
                    <View style={styles.viewImg}>
                      <Image source={require("../image/Header/Header_Main.png")} resizeMode="center" style={styles.imgAsanPardakht} />
                    </View>
                    <View style={styles.viewLeft}>
                      <Text style={styles.textHelp}>آیکون آپ</Text>
                    </View>
                  </View>
                  <Text style={styles.textCenter}>در کلیه صفحات با لمس لوگوی آپ به صفحه اول برنامه بازخواهید گشت.</Text>
                </ScrollView>
              </View>
              <View style={styles.viewFooterModal}>
                <TouchableOpacity onPress={close}>
                  <Icon type="FontAwesome5" name="times" style={styles.iconFooter} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flex: 2, backgroundColor: "rgba(0, 0, 0, 0.55)" }}></View>
        </View>
      </Modal >
    );
  }
}
const styles = StyleSheet.create({

  /* ____ Start Wraper ____ */

  wraperModal: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: 'column',
    width: "100%",
    borderWidth: 1,
    borderColor: "#FF4500",
  },

  /* ____ Start Wraper ____ */

  /* ______________________________ */

  /* ____ Start Header ____ */

  viewTopHeader: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: "1%",
  },
  viewContentHeader: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    width: "10%",
    height: "90%",
    borderRadius: 500,
    alignSelf: "center",
  },
  iconHeader: {
    justifyContent: "center",
    color: "black",
    fontSize: 15,
    textAlign: "center",
    alignSelf: "center",
  },

  /* ____ End Header ____ */

  /* ______________________________ */

  /* ____ Start Content ____ */

  viewContentModal: {
    flex: 8,
    justifyContent: "center",
    width: "100%",
    backgroundColor: "white",
  },
  viewDirection: {
    flexDirection: "row-reverse",
    marginTop: 10,
  },
  viewRToL: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewEmpty: {
    width: "80%",
    borderRadius: 500,
    height: 30,
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "center",
  },
  viewLeft: {
    flex: 9,
    justifyContent: "center",
  },
  textHelp: {
    fontFamily: "IRANSans",
    fontSize: 12,
    color: "#00FA9A",
    padding: "3%",
    color: "#0000CD",
  },
  textCenter: {
    fontFamily: "IRANSans",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
    padding: "4%",
    color: "black",
  },
  iconBars: {
    justifyContent: "center",
    fontSize: 25,
    width: "90%",
    padding: "2%",
  },
  viewImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    aspectRatio: 1 / 1,
  },
  imgAsanPardakht: {
    width: "80%",
    height: "60%",
    alignSelf: "center",
    borderRadius: 30,
    padding: "2%",
  },

  /* ____ End Content ____ */

  /* ______________________________ */

  /* ____ Start Footer ____ */

  viewFooterModal: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    width: "100%",
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  iconFooter: {
    justifyContent: "center",
    color: "red",
    fontSize: 35,
    textAlign: "center",
    alignSelf: "center",
  },

  /* ____ End Footer ____ */

  /* ______________________________ */

})
export default CustomModal;