import React  from 'react';
import { StyleSheet,
  Image,
  Dimensions,
  TextInput,
  Pressable} from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import LoginInput from '../components/LoginTextInput';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;


export default function LogInTab({ navigation }: RootTabScreenProps<'LogInTab'>) {
  return (
    <View style={styles.container}>
      <View style={styles.pizzaBorder}>
        <Image source={require('../assets/images/pizza(login).png')} style={styles.pizza}/>
      </View>
      <View style={styles.login}>
        <View style={styles.roundedrec}>
          <LoginInput/>
          <View style={styles.loginbutton}>
            <Text style={styles.title}>Log In</Text>
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6D6D',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  pizzaBorder: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    height: screenHeight/2.3,
  },
  pizza: {
    width: 400,
    height: 400,
  },
  login: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    width: screenWidth,
    height: screenHeight/2,
  },
  roundedrec: {
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*.75,
    height:screenHeight*.4,
    backgroundColor:'#fff',
    borderRadius:50,
    elevation: 10,
    
  },
  loginbutton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*36/100,
    height:screenHeight*6/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
  },
  login_sign: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*45/100,
    height:screenHeight*5/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
    
  },
  signbox: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*45/100,
    height:screenHeight*5/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
  }

});
