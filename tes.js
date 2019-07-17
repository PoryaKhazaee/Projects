import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Container,Input ,Form, Item, Content, Card,Badge, CardItem, Icon, Fab,Footer, FooterTab } from 'native-base';

export default class tes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
      <Content>
        <Card>
          <CardItem header bordered>
            <Image source={require("./src/image/Header/header.jpg")} style={{ height: 300, width: null, flex: 1, }} />
          </CardItem>
        </Card>
        <Text style={styles.textTitle}>شرکت آسان پرداخت</Text>
        <Text style={styles.textContent}>به خانواده ۲۵میلیونی شرکت آسان پرداخت خوش آمدید</Text>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", padding: 50, }}>
          <Button onPress={() => { alert("متاسفانه صفحه موردنظرکامل نیست"); }} rounded  success style={{ justifyContent: 'center', width: "50%" }}>
            <Text style={styles.textLogin}>ثبت نام</Text>
          </Button>
          <Button onPress={() => { alert("متاسفانه صفحه موردنظرکامل نیست"); }} rounded  success style={{ justifyContent: 'center',  width: "50%" }}>
            <Text style={styles.textLogin}>ورود</Text>
          </Button>
        </View>
      </Content>
    </Container>
    );
  }
}
