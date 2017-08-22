import React, { Component } from 'react';
import  {Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';

class Center extends Component {

    static navigationOptions = {
        tabBarLabel:"个人中心1",
        title:"个人中心1",
        tabBarIcon:({tintColor })=>(
            <FontAwesome name="user" color={ tintColor } size={24} />
        ),
        headerRight: (
            <FontAwesome name="plus"  size={20} style={{marginRight:20}} />
        )
    }
    render() {
        return (
            <Text>123</Text>
        )
    }
}

export default StackNavigator({
    Center: {screen: Center }
})





