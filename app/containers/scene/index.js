import React, { Component } from 'react';
import  {Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

class Scene extends Component {

    static navigationOptions = {
        tabBarLabel:"智能场景",
        title:"智能场景",
        tabBarIcon:({tintColor })=>(
            <FontAwesome name="home" color={ tintColor } size={24} />
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
    Scene: {screen: Scene }
})





