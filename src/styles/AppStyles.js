import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  /* ____ Start Home ____ */

  imgHome: {
    height: 400,
    width: null,
    flex: 1
  },
  viewHome: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: "10%",
  },
  buttonViewHome: {
    justifyContent: "space-around",
    borderRadius: 10,
    width: "50%",
    margin: 3,
  },
  textTitle: {
    textAlign: "center",
    fontFamily: "IRANSans",
    fontSize: 20,
    color: "red",
    paddingTop: 7
  },
  textContent: {
    textAlign: "center",
    fontFamily: "IRANSans",
    fontSize: 12,
    color: "black",
    paddingTop: 10,
  },
  textLogin: {
    color: "white",
    fontSize: 15,
    fontFamily: "IRANSans"
  },

  /* ____ End Home ____ */

  /* ____________________________ */

  /* ____ Start LogIn ____ */

  viewLogIn: {
    marginTop: 40,
    width: "100%",

  },
  inputLogIn: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    margin: 10,
    textAlign: "right",
    color: "black",
    fontFamily: "IRANSans",
    borderBottomWidth: 1,
    borderBottomColor: "red",
    borderRadius: 10
  },
  touchShow: {
    justifyContent: "center"
  },
  textShow: {
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 10,
    color: 'red',
  },


  /* ____ End LogIn ____ */

  /* ____________________________ */

  /* ____ Start HeaderMain ____ */

  /* ____ End HeaderMain ____ */

});
export default styles;