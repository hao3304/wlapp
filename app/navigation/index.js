import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'

import MyDevices from '../containers/device'
import Scene from '../containers/scene'
import Center from '../containers/center'


const Navigation = TabNavigator({
    Home: { screen: MyDevices},
    Scene: { screen: Scene },
    Center: {screen: Center }
},{
    lazy:false,
    tabBarPosition:"bottom",
    tabBarComponent:TabBarBottom,
    tabBarOptions:{
        showIcon:true,
        activeTintColor:"#ff5800"

    },
    style: {
        backgroundColor:"#fff"
    },
    initialRouteName:'Home'
})

export default Navigation