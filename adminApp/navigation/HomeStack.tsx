import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import LogIn from "../screen/LogIn";
import HomeAdmin from "../screen/admin/HomeAdmin";
import TaskOrder from "../screen/chef/TaskOrder";
import RiderTask from "../screen/rider/RiderTask";
import 'react-native-gesture-handler';

const screens = {
    Home:{
        screen: LogIn,
        navigationOptions:{
            headerShown: false
        },
    },
    Admin:{
        screen: HomeAdmin,
        navigationOptions:{
            headerShown: false
        },
    },
    Chef:{
        screen: TaskOrder,
        navigationOptions:{
            headerShown: false
        },
    },
    Rider:{
        screen: RiderTask,
        navigationOptions:{
            headerShown: false
        },
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);