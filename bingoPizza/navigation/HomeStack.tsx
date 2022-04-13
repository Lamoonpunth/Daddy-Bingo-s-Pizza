import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import LogInTab from "../screens/LogInTab";
import Reginfo from "../screens/Reginfo";
import OrderTab from "../screens/OrderTab";
import 'react-native-gesture-handler';

const screens = {
    LogIn:{
        screen: LogInTab,
        navigationOptions:{
            headerShown: false
        },
    },
    RegisterInfo:{
        screen: Reginfo,
        navigationOptions:{
            headerShown: false
        },
    },
    Order:{
        screen: OrderTab,
        navigationOptions:{
            headerShown: false
        },
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);