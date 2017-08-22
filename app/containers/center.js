import React, { Component, PropTypes } from 'react';
import { Text,View,TouchableHighlight  } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class UserCenter extends Component {

    static navigationOptions =({navigation })=> {
        const {state, setParams} = navigation;
        return {
            tabBarLabel:"个人中心",
            title:'个人中心',
            headerRight:(
               <Text  style={{marginRight:15}} onPress={()=>state.params.handleToSetting()}>设置</Text>
            ),
            tabBarIcon:({tintColor,active })=>(
                <FontAwesome name="user" size={24} color={ tintColor } />
            )
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({handleToSetting: this.toSetting})
    }

    toSetting =()=> {
       this.props.navigation.navigate('Setting')
    }

    render() {
        return (
            <View>
                <Text onPress={ this.toSetting } >
                    个人中心
                </Text>
            </View>
        )
    }
}