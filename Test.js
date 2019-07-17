   // <Container>
      //   <Content>
      //     <View style={styles.Wraper}>
      //       <View style={styles.header}>
      //         <Icon onPress={() => { alert("SideBar"); }} style={{ margin: 18, color: "white" }} name='menu' />
      //         <Text style={{ margin: 10, fontSize: 18, color: "white", padding: 10, }}>Movie Time</Text>
      //         <Icon onPress={() => { alert("SideBar"); }} style={{ margin: 18, marginLeft: 180, color: "white" }} iconRight name='arrow-forward' />
      //       </View>
      //       <Text style={{ textAlign: 'center', margin: 15, fontSize: 23, color: "black" }}>Register</Text>
      //       <View style={styles.Content}>
      //         <View style={styles.Section}>
      //           <Text>dddd</Text>
      //           {/* <TextInput
      //       Fstyle={{height: 40,color: "white", fontSize: 33}}
      //       placeholder="Type here to translate!"  onChangeText={(text) => this.setState({text})}/> */}
      //         </View>
      //         <View style={styles.Section}>
      //           <Text>lastName</Text>
      //         </View>
      //         <View style={styles.Section}>
      //           <Text>Email</Text>
      //         </View>
      //         <View style={styles.Section}>
      //           <Text>userName</Text>
      //         </View>
      //         <View style={styles.Section}>
      //           <Text>Password</Text>
      //         </View>
      //         <View style={styles.Section2}>
      //           <Image style={styles.img}
      //             source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
      //           <Text style={{ color: "black", fontSize: 15 }}>Choose Profile Photo</Text>
      //         </View>
      //         <Button style={styles.buttonSection} onPress={() => { }}>
      //           <Text style={{ color: "yellow", fontSize: 20 }}>Register</Text>
      //         </Button>
      //       </View>
      //       <View>
      //         <Button block primary iconLeft style={{ borderRadius: 20, margin: 15, }}>
      //           <Icon name='home' />
      //           <Text style={{ padding: 15, color: "white" }}>Home</Text>
      //         </Button>
      //         <Card>
      //           <CardItem header bordered>
      //             <Text>NativeBase</Text>
      //           </CardItem>
      //           <CardItem bordered>
      //             <Body>
      //               <Text>
      //                 NativeBase is a free and open source framework that enable
      //                 developers to build
      //                 high-quality mobile apps using React Native iOS and Android
      //                 apps
      //                 with a fusion of ES6.
      //           </Text>
      //             </Body>
      //           </CardItem>
      //           <CardItem footer bordered>
      //             <Text>GeekyAnts</Text>
      //           </CardItem>
      //         </Card>
      //         <Card>
      //           <CardItem>
      //             <Icon active name="logo-googleplus"/>
      //             <Text>googleplus</Text>
      //             <Right>
      //               <Icon name="arrow-forward" />
      //             </Right>
      //           </CardItem>
      //         </Card>
      //       </View>
      //     </View>
      //   </Content>
      // </Container>



      // class Blink extends Component {
      //    constructor(props) {
      //      super(props);
      //      this.state = { isShowingText: true };
       
      //      setInterval(() => {
      //        this.setState(previousState => {
      //          return { isShowingText: !previousState.isShowingText };
      //        });
      //      }, 1000);
      //    }
      //    render() {
      //      let display = this.state.isShowingText ? this.props.text : ' ';
      //      return (
      //        <Text style={{color: "red", fontSize: 15,textAlign: "center", fontWeight: "bold"}}>{display}</Text>
      //      );
      //    }
      //  }
       
      //  export default class App extends Component {
       
      //    render() {
      //      return (
      //        <Container>
      //          <Content>
      //            <Card>
      //              <CardItem header bordered>
      //                <Image source={require("./src/image/Header/header.jpg")} style={{ height: 300, width: null, flex: 1, }} />
      //              </CardItem>
      //            </Card>
      //            <Text style={{ textAlign: "center", fontSize: 25, color: "red", fontWeight: "bold", paddingTop: 7 }}>شرکت آسان پرداخت</Text>
      //            <Text style={{ textAlign: "center", fontSize: 15, color: "black", fontWeight: "bold", paddingTop: 7 }}>به خانواده ۲۵میلیونی شرکت آسان پرداخت خوش آمدید</Text>
      //            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", padding: 50, }}>
      //              <Button onPress={() => { alert("متاسفانه صفحه موردنظرکامل")}} rounded success style={{ padding: 20, width: 150, justifyContent: 'center' }}>
      //                <Text style={{ color: "white", fontSize: 18 }}>ثبت نام</Text>
      //              </Button>
      //              <Button onPress={() => {alert("متاسفانه صفحه موردنظرکامل نیست"); }} rounded success style={{ padding: 20, width: 150, justifyContent: 'center' }}>
      //                <Text  style={{ color: "white", fontSize: 18 }}>ورود</Text>
      //              </Button>
      //            </View>
      //            <Blink text="ماهانه یک میلیاردریال به قیدقرعه" />
      //          </Content>
      //        </Container>
      //      );
      //    }
      //  }