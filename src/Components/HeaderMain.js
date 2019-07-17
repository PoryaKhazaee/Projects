import React , {Component} from 'react';
import {View , StyleSheet, NativeModules, Platform, } from "react-native";
import {
    Header , 
} from 'native-base';

const isIOS = Platform.OS === 'ios';

const lang = isIOS ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;

class CustomHeader extends Component{
    render(){
        const {right , body , left} = this.props;
        // const right = this.props.right
        var style =  lang === 'fa_IR' ? {flexDirection : 'row'} : {flexDirection : 'row-reverse'};
        return(
            <Header style={[styles.header, style]} androidStatusBarColor={"#363636"}>
                <View style={styles.right}>
                    {right}
                </View>
                <View style={styles.body}>
                    {body}
                </View>
                <View style={styles.left}>
                    {left}
                </View>
            </Header>
        )
    }
}

const styles = StyleSheet.create({ 
    header : {
        backgroundColor : '#434343' , 
        display : 'flex',
        flexDirection : "row-reverse"
    } , 
    right : {
        flex : 1,
        justifyContent: "center"  
    } , 
    body : {
        flex : 4, 
        alignItems: "center",
        justifyContent: "center"
        
    } , 
    left : {
        flex : 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default CustomHeader;