import React, { Component, PropTypes } from 'react';
import { Text,View,TouchableHighlight } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Second extends Component {
    static navigationOptions = {

        tabBarLabel:"智能场景",
        title:"智能场景",
        tabBarIcon:({tintColor })=>(
            <FontAwesome name="home" color={ tintColor } size={24} />
        ),
        headerRight: (
            <TouchableHighlight  style={{marginRight:15}}   >
                <FontAwesome name="plus"  size={20} />
            </TouchableHighlight>
        )
    }
    render() {
        return (
            <View>
                <Text>
                    secend1
                </Text>
            </View>
        )
    }
}