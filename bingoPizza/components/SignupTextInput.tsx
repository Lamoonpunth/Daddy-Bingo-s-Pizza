import React from "react";
import { StyleSheet, 
  TextInput, 
  Dimensions, 
  View, 
  Text, 
  TouchableOpacity} from "react-native";

const {height, width} = Dimensions.get('screen');

const SignUptext = () => {
  const [username, onChangeText] = React.useState('');
  const [password, onChangeNumber] = React.useState('');
  const [confirm, onConfirm] = React.useState('');

  const onSignInButton = () => {

  }

  return (
    <View style={styles.signupcontainer}>
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
      <TouchableOpacity style={styles.signupbutton} onPress={onSignInButton}>
        <Text style={{fontSize:20, color: 'white'}}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.box3}/>
    </View>
  );
};

const styles = StyleSheet.create({
  signupcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 12,
    width: width *.6,
    height: height * .055,
    margin: 8,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 12,
  },
  signupbutton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:width*36/100,
    height:height*6/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
  },
  box3: {
    alignItems:'center',
    justifyContent:'center',
    width:width*.75,
    height:height*.025,
    backgroundColor:'transparent',
    borderWidth: 1,
  },
});

export default SignUptext;