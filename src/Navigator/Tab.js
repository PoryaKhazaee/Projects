import React , {Component} from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import Mobile from '../Screen/Mobile';
import Wifi from '../Screen/Wifi';
import PageTab from '../Components/PageTab';

const Tab = createMaterialTopTabNavigator({
    Mobile: { screen: Mobile },
    Wifi: { screen: Wifi },
},
    {
        initialRouteName: "Mobile",
        tabBarComponent: (data)=>{            
            return(
                <PageTab navigation={data.navigation} />
            )
        },
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
    }
);


export default createAppContainer(Tab);

// if (this.PaymentResponse.navigation.state.index == 1) {
//     {backgroundColor : 'red'}
// } else {
//     {}
// }

// this.PaymentResponse.navigation.state.index == 1 ? {backgroundColor : 'red'} : {}