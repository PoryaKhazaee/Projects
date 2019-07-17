import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Dimensions } from 'react-native';
import MainScreen from '../Screen/Main';
import Tab from './Tab';
import SideBar from '../Components/SideBar';

const Drawer = createDrawerNavigator({
    MainScreen: { screen: MainScreen },
    Tab: { screen: Tab },
},
    {
        drawerPosition: "right",
        contentComponent: SideBar,
        headerMode: 'none',
        drawerWidth: Dimensions.get("screen").width*0.50,
        drawerBackgroundColor: "transparent"
    }
);

export default createAppContainer(Drawer);