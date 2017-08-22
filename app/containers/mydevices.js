import React, { Component, PropTypes } from 'react';
import { View,Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Device extends Component {

    static navigationOptions = {
        tabBarLabel:"我的设备",
        title:'Logo1',
        tabBarIcon:({tintColor,active })=>(
            <FontAwesome name="cubes" size={24} color={ tintColor } />
        )
    }


    render() {
        return (
            <View>
                <Button title="添加设备" onPress={()=>this.props.navigation.navigate('AddDevice')}></Button>
            </View>
        )
    }
}