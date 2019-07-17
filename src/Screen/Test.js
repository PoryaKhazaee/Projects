import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'native-base';
export default class Test extends Component {

    render() {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#434343', '#767676', '#434343']} style={{ flex: 1,justifyContent:"center", alignItems: "center" }}>
                <Text style={{fontFamily: "IRANSans", color:"white"}}>صفحه مورد نظر کامل نیست</Text>
                <Button danger block rounded  onPress={() => this.props.navigation.goBack(null)} style={{marginTop:15}}>
                    <Text style={{fontFamily: "IRANSans", color:"white"}}>برگشت</Text>
                </Button>
            </LinearGradient>
        );
    }
}
