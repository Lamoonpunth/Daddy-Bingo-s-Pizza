import { StatusBar } from 'expo-status-bar';
import { StyleSheet,} from 'react-native';
import Navigator from './navigation/HomeStack'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigator/>
      <StatusBar style="auto" />  
    </SafeAreaProvider>
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
