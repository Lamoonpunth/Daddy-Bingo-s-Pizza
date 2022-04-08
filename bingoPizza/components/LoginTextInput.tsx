import React from "react";
import { Button } from "react-native";
import { SafeAreaView, StyleSheet, TextInput, Dimensions, View, Text, Pressable} from "react-native";

const {height, width} = Dimensions.get('screen');

const UselessTextInput = () => {

  const [Username, onChangeText] = React.useState('');
  const [Password, onChangePass] = React.useState('');
  const [submitted, onSubmit] = React.useState(false);
  const onSubmitButton = () => {
    fetch("http://localhost:3000/send-data",{
      method:'post',
      headers:{
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        username:Username,
        password:Password
      })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePass}
        value={Password}
        placeholder="Password"
        secureTextEntry={true} 
      />
      <View style={{alignItems: 'center',}}>
        <Pressable>
          <Text style={{color:'palevioletred',}}>Forgot Password?</Text>
        </Pressable>
        <Text>You are now Logged In as {Username}</Text>
      </View>
      <View style={styles.container3}/>
      <Button title="LogIn"
      onPress={onSubmitButton}/>
      <View style={styles.loginbutton}>
        <Text style={{fontSize:20, color: 'white'}}>
          LogIn
        </Text>
      </View>
      <View style={styles.space}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStartColor: 'red',
  },
  input: {
    fontSize: 12,
    width: width *.6,
    height: height * 0.055,
    margin: 8,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  loginbutton: {
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:width*36/100,
    height:height*6/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
  },
  container3: {
    alignItems:'center',
    justifyContent:'center',
    width:width*.75,
    height:height*.035,
    backgroundColor:'transparent',
    borderWidth: 1,
  },
  space: {
    alignItems:'center',
    justifyContent:'center',
    width:width*.75,
    height:height*.025,
    backgroundColor:'transparent',
    borderWidth: 1,
  },
});

export default UselessTextInput;