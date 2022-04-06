import React  from 'react';
import { StyleSheet,
  Image,
  Dimensions,
  TextInput,
  Pressable, 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import SigninInput from '../components/SigninTextInput';

export default function SignInTab() {
  return (
    <View style={styles.container}>
      <View style={styles.pizzaBorder}>
        <Image source={require('../assets/images/pizza(login).png')} style={styles.pizza}/>
      </View>
      <View style={styles.login}>
        <View style={styles.roundedrec}>
          <SigninInput/>
          <View style={styles.loginbutton}>
            <Text style={styles.title}>Sign In</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6D6D',
  },
  avoid:{
    flex:1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  pizzaBorder: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    height: screenHeight/2,
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
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*75/100,
    height:screenHeight*35/100,
    backgroundColor:'#fff',
    borderRadius:50,
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
});
