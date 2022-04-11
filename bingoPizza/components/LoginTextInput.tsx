import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, 
  TextInput, 
  Dimensions, 
  View, 
  Text, 
  Pressable} from "react-native";

const {height, width} = Dimensions.get('screen');

const UselessTextInput = () => {

  const [Username, onChangeText] = React.useState('');
  const [Password, onChangePass] = React.useState('');
  const [submitted, onSubmit] = React.useState(false);
  const onSubmitButton = () => {
    if (submitted == false) {
      onSubmit(!submitted);
      const target =  "http://10.0.2.2:3000/usercheck?username="+Username+"&password="+Password
      fetch(target,{
      method:'post',
      headers:{
          'Content-Type': 'application/json'
      }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data === "SUCCESS"){
        alert("You are logged in.");
       }
    })
    }
    else{
      onChangeText('');
      onChangePass('');
      onSubmit(!submitted);
    }
  }

  return (
    <View style={styles.logincontainer}>
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
      <View style={styles.box1}/>
      <TouchableOpacity style={styles.loginbutton} onPress={onSubmitButton}>
        <Text style={{fontSize:20, color: 'white'}}>
          LogIn
        </Text>
      </TouchableOpacity>
      <View style={styles.box2}/>
    </View>
  );
};

const styles = StyleSheet.create({
  logincontainer: {
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
  loginbutton: {
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:width*36/100,
    height:height*6/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
  },
  box1: {
    alignItems:'center',
    justifyContent:'center',
    width:width*.75,
    height:height*.035,
    backgroundColor:'transparent',
    borderWidth: 1,
  },
  box2: {
    alignItems:'center',
    justifyContent:'center',
    width:width*.75,
    height:height*.025,
    backgroundColor:'transparent',
    borderWidth: 1,
  },
});

export default UselessTextInput;