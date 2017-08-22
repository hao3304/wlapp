import React, { Component } from 'react';
import  {Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

class Device extends Component {

    static navigationOptions = {
        tabBarLabel:"我的设备",
        title:'Logo1',
        tabBarIcon:({tintColor,active })=>(
            <FontAwesome name="cubes" size={24} color={ tintColor } />
        )
    }
    render() {
        return (
            <Text>123</Text>
        )
    }
}

export default StackNavigator({
    MyDevice: {screen: Device }
},{
    transitionConfig:()=>({
        screenInterpolator:CardStackStyleInterpolator.forVertical,
    })
})





