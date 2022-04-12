import React  from 'react';
import { StyleSheet,
  Text,
  Image,
  Dimensions,
  Pressable,
  TextInput,
  TouchableOpacity} from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { View } from '../components/Themed';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const {height, width} = Dimensions.get('screen');

export default function LogInTab({navigation}:{navigation:any}) {
  /**************************************************/
  /*ตัวเลือกของswitch selector*/ 
  const options = [
    { label: "Log In", value: "Login" },
    { label: "Sign up", value: "Signup" },
  ];
  const [switchbutton, onSelector] = React.useState('Login');

  /*********************************LogIn*********************************/
  const [Username, onChangeText] = React.useState('');
  const [Password, onChangePass] = React.useState('');
  const [submitted, onSubmit] = React.useState(false);
  const onSubmitButton = () => {
      const target =  "http://10.0.2.2:3000/login?username="+Username+"&password="+Password
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
        navigation.navigate("Order");
       }
    })
      onChangeText('');
      onChangePass('');
      onSubmit(!submitted);
  }
  /*********************************LogIn*********************************/

  /********************************SignUp*********************************/
  const [username, onChangeSignUser] = React.useState('');
  const [password, onChangeSignPass] = React.useState('');
  const [confirm, onConfirm] = React.useState('');
  const onSignUpButton = () => {
      const target =  "http://10.0.2.2:3000/usercheck?username="+username
      fetch(target,{
      method:'post',
      headers:{
          'Content-Type': 'application/json'
      }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data === "user doesn't exist"){
        navigation.navigate('RegisterInformation')
          }
       else{
         alert("user exist");
          }
        }
      )
      onChangeSignUser('');
      onChangeSignPass('');
      onConfirm('');
  }
  /********************************SignUp*********************************/

  return (
    <View style={styles.container}>

      <View style={styles.pizzaBorder}>
        <Image source={require('../assets/images/pizza(login).png')} style={styles.pizza}/>
      </View>

      <View style={styles.LogInAndSignUp}>
        <View style={styles.roundedrec}>
          <View style={styles.space1}>
          </View>
          <View style={styles.selector}>
            <SwitchSelector
              onPress={(value: any) => onSelector(value)}
              options={options}
              initial={0}
              textColor='#FF6D6D'
              selectedTextStyle={{color:'#FFFFFF'}}
              buttonColor='#FF6D6D'
              borderColor='#E5E5E5'
              hasPadding
            />  
          </View>
          {switchbutton == "Login"?
            /*********************************LogIn*********************************/
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
          /*********************************LogIn*********************************/
          /********************************SignUp*********************************/
          :
          <View style={styles.signupcontainer}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeSignUser}
              value={username}
              placeholder="Username"

            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeSignPass}
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
            <TouchableOpacity style={styles.signupbutton} onPress={onSignUpButton}>
              <Text style={{fontSize:20, color: 'white'}}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.box3}/>
          </View>
          /********************************SignUp*********************************/
          }
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
  space1: {
    alignItems:'center',
    justifyContent:'center',
    width:width*.75,
    height:height*.025,
    backgroundColor:'transparent',
    borderWidth: 1,
  },
  selector: {
    width:screenWidth*.55,
  },
  LogInAndSignUp: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    width: screenWidth,
    height: screenHeight/2,
  },
  /******************LogIn****************/
  logincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
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
  /******************LogIn****************/
  /*****************SignUp****************/
  signupcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
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
  /*****************SignUp****************/
});