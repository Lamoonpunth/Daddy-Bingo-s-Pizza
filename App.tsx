import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,} from 'react-native';
import HomeStack from './navigation/HomeStack';
import RootDrawerNavigator from './navigation/AdminDrawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator/>
      <StatusBar style="auto" />  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
