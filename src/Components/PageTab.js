import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, NativeModules, Platform, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon } from 'native-base';
import CustomHeader from './HeaderMain';


const isIOS = Platform.OS === 'ios';

const lang = isIOS ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;

class PageTab extends Component {
    render() {
        var style = lang === 'fa_IR' ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' };
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#5c5c5c', '#767676', '#5c5c5c']} style={styles.style}>
                <CustomHeader
                    right={
                        <View style={styles.viewRight}>
                            <Icon type="FontAwesome5" name="exclamation" style={styles.iconRight} />
                        </View>
                    }
                    body={
                        <View style={styles.viewBody}>
                            <Image source={require("../image/Header/Header_Main.png")} resizeMode="center" style={styles.imgBody} />
                        </View>
                    }
                    left={
                        <Button transparent type="displace" onPress={() => this.props.navigation.goBack(null)}>
                            <Icon type="FontAwesome5" name="chevron-left" style={styles.iconRight} />
                        </Button>
                    }
                />
                <View style={[styles.viewTab, style]}>
                    <Button bordered light transparent onPress={() => this.props.navigation.navigate("Wifi")} style={[{ flex: 1, borderTopRightRadius: 7, borderBottomRightRadius: 7, }, this.props.navigation.state.index == 1 ? { backgroundColor: 'white' } : {}]}>
                        <Text style={{ width: "100%", textAlign: "center", fontFamily: "IRANSans", }} >ADSL</Text>
                    </Button>
                    <Button bordered light transparent onPress={() => this.props.navigation.navigate("Mobile")} style={[{ flex: 1, borderTopLeftRadius: 7, borderBottomLeftRadius: 7, }, this.props.navigation.state.index == 0 ? { backgroundColor: 'white' } : {}]}>
                        <Text style={{ width: "100%", textAlign: "center", fontFamily: "IRANSans", }}>پکیج اینترنت</Text>
                    </Button>
                </View>
            </LinearGradient>
        );
    }
}
export default PageTab;
const styles = StyleSheet.create({
    viewBody: {
        width: "25%",
        aspectRatio: 1 / 1,
        justifyContent: "center"
    },
    viewRight: {
        width: "50%",
        height: "70%",
        justifyContent: "center",
        aspectRatio: 1 / 1,
        borderColor: "white",
        borderRadius: 30,
        borderWidth: 1,
    },
    iconRight: {
        justifyContent: "center",
        color: "white",
        fontSize: 20,
        textAlign: "center",
        alignSelf: "center",
    },
    txt: {
        justifyContent: "center",
        color: "white",
        flex: 1,
        marginRight: 1,
        textAlign: "center",
        fontFamily: "IRANSans",
        alignSelf: "center",

    },
    imgBody: {
        width: "80%",
        height: "60%",
        alignSelf: "center",
        borderRadius: 30
    },
    viewLeft: {
        width: "100%",
        height: "70%",
        justifyContent: "center",
        aspectRatio: 1 / 1,
    },
    viewTab: {
        flexDirection: "row-reverse",
        marginTop: 30,
        width: "80%",
        alignSelf: "center",
    }
})