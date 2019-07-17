import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, NativeModules, Platform, TouchableOpacity, AppRegistry, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../Components/HeaderMain';
import { Button, Icon, } from 'native-base';
import Swiper from 'react-native-swiper';
import CustomModal from '../Components/Modal';


const isIOS = Platform.OS === 'ios';
const lang = isIOS ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShown: false,
        }
    }

    showModal = () => {
        this.setState({ isShown: true })
    }

    closeModal = () => {
        this.setState({ isShown: false })
    }



    render() {
        var style = lang === 'fa_IR' ? { flexDirection: 'row' } : { flexDirection: "row-reverse" };
        return (
            <View style={styles.viewMain}>
                <CustomHeader
                    right={
                        <Button transparent type="displace" onPress={() => this.props.navigation.toggleDrawer("SideBar")}>
                            <Icon type="FontAwesome5" name="bars" style={styles.iconRight} />
                        </Button>
                    }
                    body={
                        <View style={styles.viewBody}>
                            <Image source={require("../image/Header/Header_Main.png")} resizeMode="center" style={styles.imgBody} />
                        </View>
                    }
                    left={
                        <View style={styles.viewLeft}>
                            <TouchableOpacity onPress={this.showModal}>
                                <Icon type="FontAwesome5" name="exclamation" style={styles.iconLeft} />
                            </TouchableOpacity>
                        </View>
                    }

                />

                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#434343', '#767676', '#434343']} style={{ flex: 1, }}>
                    <CustomModal visible={this.state.isShown} close={this.closeModal} name={"pourya"} />
                    <Swiper style={styles.wrapper} showsButtons={false} dotBackground="rgb(105,105,105)"  activeDotColor="white">
                    <View style={styles.slide2}>
                            <View style={[styles.mainContent, style]}>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Tab') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="broadcast-tower" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>شارژ اینترنت</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="exchange-alt" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>کارت به کارت</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="mobile-alt" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>خرید شارژ</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.mainContent, style]}>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="newspaper" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>قبض خدماتی</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="file-invoice-dollar" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>موجودی</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="newspaper" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>قبض موبایل و تلفن</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.mainContent, style]}>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="hand-holding-heart" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>نیکوکاری</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="plane" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>پرواز داخلی و خارجی</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="hotel" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>بلیط سفر و هتل</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.slide1}>
                            <View style={[styles.mainContent, style]}>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="umbrella-beach" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>بیمه</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="balance-scale" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>قوه قضاییه</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="subway" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>خرید بلیط قطار</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.mainContent, style]}>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="bus-alt" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>خرید بلیط اتوبوس</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Image source={require("../image/Header/Header_Main.png")} resizeMode="center" style={styles.imgBody} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>کلوپ آپ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="road" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>عوارضی آزادراه</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.mainContent, style]}>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="car" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>خدمات خودرو</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="coins" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>سرمایه گذاری</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mainContentSection} onPress={() => { this.props.navigation.navigate('Test') }}>
                                    <View style={styles.mainContentSectionBox}>
                                        <Icon type="FontAwesome5" name="quora" style={styles.mainContentSectionBoxIcon} />
                                    </View>
                                    <Text style={styles.mainContentSectionBoxText}>اسنپ کیو</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Swiper>

                    {/* Start  Footer */}

                    <View style={[styles.viewFooter, style]}>
                        <View style={styles.mainContentSectionFooter}>
                            <TouchableOpacity style={styles.mainContentSectionBoxFooter}>
                                <Icon type="FontAwesome5" name="barcode" style={styles.mainContentSectionBoxIconFooter} />
                            </TouchableOpacity>
                            <Text style={styles.mainContentSectionBoxTextFooter}>تله پرداز</Text>
                        </View>
                        <View style={styles.mainContentSectionFooter}>
                            <TouchableOpacity style={styles.mainContentSectionBoxFooter}>
                                <Icon type="FontAwesome5" name="sync" style={styles.mainContentSectionBoxIconFooter} />
                            </TouchableOpacity>
                            <Text style={styles.mainContentSectionBoxTextFooter}>تکرارتراکنش</Text>
                        </View>
                        <View style={styles.mainContentSectionFooter}>
                            <TouchableOpacity style={styles.mainContentSectionBoxFooter}>
                                <Icon type="FontAwesome5" name="wallet" style={styles.mainContentSectionBoxIconFooter} />
                            </TouchableOpacity>
                            <Text style={styles.mainContentSectionBoxTextFooter}>کیف پول</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}
AppRegistry.registerComponent('myproject', () => SwiperComponent)
const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1, alignItems: "center",

    },
    slide2: {
        flex: 1, alignItems: "center",

    },
    viewMain: {
        flex: 1,
    },
    viewBody: {
        width: "25%",
        aspectRatio: 1 / 1,
        justifyContent: "center"
    },

    iconRight: {
        justifyContent: "center",
        width: "100%",
        fontSize: 30,
        textAlign: "center",
    },

    imgBody: {
        width: "80%",
        height: "60%",
        alignSelf: "center",
        borderRadius: 30
    },

    viewLeft: {
        width: "100%",
        height: "60%",
        justifyContent: "center",
        aspectRatio: 1 / 1,
        borderColor: "white",
        borderRadius: 30,
        borderWidth: 1,
    },
    iconLeft: {
        justifyContent: "center",
        color: "white",
        fontSize: 20,
        textAlign: "center",
        alignSelf: "center",
    },
    mainContent: {
        display: "flex",
        flexDirection: "row-reverse",
        marginTop: 35
    },
    mainContentSection: {
        flex: 1,
        alignItems: "center",
    },
    mainContentSectionBox: {
        alignSelf: "center",
        aspectRatio: 1 / 1,
        width: "60%",
        borderWidth: 2,
        borderRadius: 500,
        borderColor: "#FF4500",
        backgroundColor: "white",
        justifyContent: "center"
    },
    mainContentSectionBoxIcon: {
        alignSelf: "center",
        color: "#434343"
    },
    mainContentSectionBoxText: {
        textAlign: "right",
        marginTop: 5,
        fontSize: 12,
        color: "white",
        fontFamily: "IRANSans",
    },

    //Start Footer

    viewFooter: {
        justifyContent: "center",
        backgroundColor: "#696969",
        flexDirection: "row-reverse",
        borderTopColor: "white",
        borderTopWidth: 2
    },
    mainContentSectionBoxFooter: {
        alignSelf: "center",
        aspectRatio: 1 / 1,
        width: "40%",
        borderRadius: 500,
        backgroundColor: "#FF4500",
        justifyContent: "center",
    },
    mainContentSectionFooter: {
        flex: 1,
        alignItems: "center",
    },
    mainContentSectionBoxIconFooter: {
        alignSelf: "center",
        fontSize: 20,
        color: "white",
    },
    mainContentSectionBoxTextFooter: {
        textAlign: "center",
        color: "white",
        fontFamily: "IRANSans",
        fontSize: 13,
        marginTop: 5,
    },
})