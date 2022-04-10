import React from "react";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { SafeAreaView, StyleSheet, TextInput, Dimensions, View, Text, Pressable} from "react-native";
import SwitchSelector from "react-native-switch-selector";

const {height, width} = Dimensions.get('screen');

const options = [
  { label: "Log In", value: "L", testID: "switch-one", accessibilityLabel: "switch-one" },
  { label: "Sign Up", value: "R", testID: "switch-one-thirty", accessibilityLabel: "switch-one-thirty" },
];

const UselessTextInput = () => {

  const [Username, onChangeText] = React.useState('');
  const [Password, onChangePass] = React.useState('');
  const [submitted, onSubmit] = React.useState(false);
  const onSubmitButton = () => {
    if (submitted == false) {
      onSubmit(!submitted);
      fetch("http://10.0.2.2:3000/send-data",{
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
    else{
      onChangeText('');
      onChangePass('');
      onSubmit(!submitted);
    }
  }

  return (
    <View style={styles.container}>
      <SwitchSelector
        options={options}
        initial={0}
        onPress={(value: any) => console.log(`Call onPress with value: ${value}`)}
        selectedColor= 'white'
        buttonColor= '#FF6D6D'
        borderColor= 'black'
        borderRadius= '1'
      />
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
        {submitted?
        <Text>You are now Logged In as {Username}</Text>
        :null}
      </View>
      <View style={styles.container3}/>
      <TouchableOpacity style={styles.loginbutton} onPress={onSubmitButton}>
        <Text style={{fontSize:20, color: 'white'}}>
          LogIn
        </Text>
      </TouchableOpacity>
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