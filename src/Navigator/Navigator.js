import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import Home from '../Screen/Home';
import LogIn from '../Screen/LogIn';
import Drawer from './Drawer';
import Test from '../Screen/Test';

const Navigator = createStackNavigator({
  Home: { screen: Home },
  LogIn: { screen: LogIn },
  Test: { screen: Test },
  Drawer: { screen: Drawer },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default createAppContainer(Navigator);
