import React from "react";
import { SafeAreaView, 
  StyleSheet, 
  TextInput, 
  Dimensions, 
  View, 
  Text, 
  Pressable,
  TouchableOpacity} from "react-native";

const {height, width} = Dimensions.get('screen');

const SignIntext = () => {
  const [username, onChangeText] = React.useState('');
  const [password, onChangeNumber] = React.useState('');
  const [confirm, onConfirm] = React.useState('');

  const onSignInButton = () => {

  }

  return (
    <View style={styles.container}>
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
      <TouchableOpacity style={styles.signinbutton} onPress={onSignInButton}>
        <View >
          <Text style={styles.title}>Sign In</Text>
        </View>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  signinbutton: {
    borderWidth:1,
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
    height:height*.040,
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

export default SignIntext;