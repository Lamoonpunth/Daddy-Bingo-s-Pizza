import { createStackNavigator } from '@react-navigation/stack';
import EditService from "../screen/admin/EditService";
import HomeAdmin from "../screen/admin/HomeAdmin";

const { Navigator, Screen } = createStackNavigator();

export const AdminStack = () => (
    <Navigator screenOptions={{headerShown:false}}>
        <Screen name='Home' component={HomeAdmin}/>
        <Screen name='EditService' component={EditService}/>
    </Navigator>
);

export default AdminStack;

/*
const screens = {
    HomeAdmin:{
        screen: HomeAdmin,
        navigationOptions:{
            headerShown: false
        },
    },
    EditService:{
        screen: EditService,
        navigationOptions:{
            headerShown: false
        },
    },
}

const AdminStack = createStackNavigator(screens);

export default AdminStack;
*/