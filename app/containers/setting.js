import React, { Component, PropTypes } from 'react';
import { Text,View } from 'react-native';



export default class UserCenter extends Component {

    static navigationOptions = {
       title:'设置',
      tabBarVisible:false
    }

    render() {
        return (
            <View>
                <Text>
                    设置
                </Text>
            </View>
        )
    }
}