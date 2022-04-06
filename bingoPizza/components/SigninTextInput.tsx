import React from "react";
import { SafeAreaView, 
  StyleSheet, 
  TextInput, 
  Dimensions, 
  View, 
  Text, 
  Pressable} from "react-native";

const {height, width} = Dimensions.get('screen');

const SignIntext = () => {
  const [username, onChangeText] = React.useState('');
  const [password, onChangeNumber] = React.useState('');
  const [confirm, onConfirm] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={username}
        placeholder="Username"

      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onConfirm}
        value={confirm}
        placeholder="Confirm password"
        secureTextEntry={true}
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    width: width *60/100,
    height: height * 0.055,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    borderColor: 'gray',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  loginbutton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:width*36/100,
    height:height*6/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
  },
});

export default SignIntext;