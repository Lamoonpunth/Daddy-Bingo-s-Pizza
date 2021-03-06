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
import Gradient from '../styles/Gradient';
import { CommonActions } from '@react-navigation/native';
const crypto = require('crypto-js');
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const {height, width} = Dimensions.get('screen');
//serverIP + port ex http://10.0.2.2:3000
const serverIP = "http://10.0.2.2:3000"
export default function LogInTab({navigation,route}:{navigation:any,route:any}) {

  //Server online check
  function isOnline(){
    const controller = new AbortController()

    // 1 second timeout:
    const timeoutId = setTimeout(() => controller.abort(), 1000)
    fetch(serverIP+"/online",{
      method:"post",
      signal:controller.signal
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)})
    .catch(error=>{alert(error)})
  }


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

  const[lusernamestate, setLUsernameState] = React.useState(false);
  const[luserpassstate, setLUserPassState] = React.useState(false);

  const onSubmitButton = () => {
    setSUsernameState(false);
    setSUserPassState(false);
    setSUserCPassState(false);
    const controller = new AbortController()

    // 1 second timeout:
    const timeoutId = setTimeout(() => controller.abort(), 1000)
    fetch(serverIP+"/online",{
      method:"post",
      signal:controller.signal
    })
    .then(res=>res.json())
    .then(data=>{

      console.log(data)
      if (Username=='' && Password==''){
        setLUsernameState(true);
        setLUserPassState(true);
        alert("Please enter your username and password.");
      }
      else if (Username==''){
        setLUsernameState(true);
        setLUserPassState(false);
        alert("Please enter your username.");
      }
      else if (Password==''){
        setLUsernameState(false);
        setLUserPassState(true);
        alert("Please enter your password.");
      }
      else{
        const controller = new AbortController()
  
        // 1 second timeout:
        const timeoutId = setTimeout(() => controller.abort(), 1000)
  
        const target =  serverIP+"/login"
        fetch(target,{
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        
        signal:controller.signal,
  
        body: JSON.stringify({
          "username" : Username,
          "password" : crypto.MD5(Password)
        }
        )
      })
      .then(res=>res.json())
      
      .then(data=>{
        if (data == "Invalid username or password")
        {
          setLUsernameState(true);
          setLUserPassState(true);
          alert(data)
        }
        else
        {
          setLUsernameState(false);
          setLUserPassState(false);
          
          navigation.navigate('Order', {screen:'Home', params:{userid:data}});
        }
      }).catch(error=>alert(error))
      
      
  
      }
        onChangeText('');
        onChangePass('');

    })
    .catch(error=>{alert("Cannot connect to server")})



  }
  /*********************************LogIn*********************************/

  /********************************SignUp*********************************/
  const [username, onChangeSignUser] = React.useState('');
  const [password, onChangeSignPass] = React.useState('');
  const [confirm, onConfirm] = React.useState('');

  const[Susernamestate, setSUsernameState] = React.useState(false);
  const[Suserpassstate, setSUserPassState] = React.useState(false);
  const[SuserCpassstate, setSUserCPassState] = React.useState(false);
  
  function isPerfect(str:any) {
    return /[a-z]/.test(str) && /[A-Z]/.test(str) && /[0-9]/.test(str);
  }

  const onSignUpButton = () => {
    setLUsernameState(false);
    setLUserPassState(false);
    const controller = new AbortController()

    // 1 second timeout:
    const timeoutId = setTimeout(() => controller.abort(), 1000)
    fetch(serverIP+"/online",{
      method:"post",
      signal:controller.signal
    })
    .then(res=>res.json())
    .then(data=>{
      const controller = new AbortController()

      // 1 second timeout:
      const timeoutId = setTimeout(() => controller.abort(), 1000)
      const target =  serverIP+"/usercheck?username="+username
      fetch(target,{
      method:'post',
      signal:controller.signal,
      headers:{
          'Content-Type': 'application/json'
      }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if (username=='' && password=='' && confirm==''){
        setSUsernameState(true);
        setSUserPassState(true);
        setSUserCPassState(true);
        alert("Please enter your username and password.");
      }
      else if (username==''){
        setSUsernameState(true);
        setSUserPassState(false);
        setSUserCPassState(false);
        alert("Please enter your username.");
      }
      else if (password==''){
        setSUsernameState(false);
        setSUserPassState(true);
        setSUserCPassState(false);
        alert("Please enter your password.");
      }
      else if (confirm==''){
        setSUsernameState(false);
        setSUserPassState(false);
        setSUserCPassState(true);
        alert("Please enter your confirm password.");
      }
      else if(password != confirm){
        setSUsernameState(false);
        setSUserPassState(false);
        setSUserCPassState(true);
        alert("Please match your password.");
      }
      else if(data === "user doesn't exist"){
        if (password.length < 8){
          setSUsernameState(false);
          setSUserPassState(true);
          setSUserCPassState(true);
          alert('password must be longer than 8 character, have Uppercase and Lowercase and number');
        }
        else if (isPerfect(password) == true){
          setSUsernameState(false);
          setSUserPassState(false);
          setSUserCPassState(false);
          console.log(username)
          console.log(password)
          navigation.navigate('Register',{Username:username,Password:crypto.MD5(password)});
        }
        else{
          setSUsernameState(false);
          setSUserPassState(true);
          setSUserCPassState(true);
          alert('password must be longer than 8 character, have Uppercase and Lowercase and number');
        }
      }
      else{
        setSUsernameState(true);
        setSUserPassState(false);
        setSUserCPassState(false);
        alert("user exist");
      }
    }
      )
    .catch(error=>alert(error))
      onChangeSignUser('');
      onChangeSignPass('');
      onConfirm('');
    })
    .catch(error=>alert("Cannot connect to server"))
  }
  /********************************SignUp*********************************/

  return (
    <Gradient>
      
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
                style={{
                  fontSize: 12,
                  width: width *.6,
                  height: height * 0.055,
                  margin: 8,
                  padding: 10,
                  borderRadius: 30,
                  borderWidth:1,
                  borderColor: lusernamestate? 'red' : 'white',
                  backgroundColor:'white',
                  elevation: 12,
                }}
                onChangeText={onChangeText}
                value={Username}
                placeholder="Username"
              />
              <TextInput
                style={{
                  fontSize: 12,
                  width: width *.6,
                  height: height * 0.055,
                  margin: 8,
                  padding: 10,
                  borderRadius: 30,
                  borderWidth:1,
                  borderColor: luserpassstate? 'red' : 'white',
                  backgroundColor: 'white',
                  elevation: 12,
                }}
                onChangeText={onChangePass}
                value={Password}
                placeholder="Password"
                secureTextEntry={true} 
              />
              <View style={{alignItems: 'center',}}>
                <TouchableOpacity>
                  <Text style={{color:'palevioletred',}}>Forgot Password?</Text>
                </TouchableOpacity>
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
              style={{
                fontSize: 12,
                width: width *.6,
                height: height * 0.055,
                margin: 8,
                padding: 10,
                borderRadius: 30,
                borderWidth:1,
                borderColor: Susernamestate? 'red' : 'white',
                backgroundColor: 'white',
                elevation: 12,
              }}
              onChangeText={onChangeSignUser}
              value={username}
              placeholder="Username"

            />
            <TextInput
              style={{
                fontSize: 12,
                width: width *.6,
                height: height * 0.055,
                margin: 8,
                padding: 10,
                borderRadius: 30,
                borderWidth:1,
                borderColor: Suserpassstate? 'red' : 'white',
                backgroundColor: 'white',
                elevation: 12,
              }}
              onChangeText={onChangeSignPass}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
              
            />
            <TextInput
              style={{
                fontSize: 12,
                width: width *.6,
                height: height * 0.055,
                margin: 8,
                padding: 10,
                borderRadius: 30,
                borderWidth:1,
                borderColor: SuserCpassstate? 'red' : 'white',
                backgroundColor: 'white',
                elevation: 12,
              }}
              onChangeText={onConfirm}
              value={confirm}
              placeholder="Confirm password"
              secureTextEntry={true}
            />
            {password != confirm && password != '' && confirm != ''?
              <Text style={{color:'red',}}>Your password doesn't match.</Text>
            :null}
            <TouchableOpacity style={styles.signupbutton} onPress={onSignUpButton}>
              <Text style={{fontSize:20, color: 'white'}}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.box3}/>
          </View>
          /********************************SignUp*********************************/
          }
        </View>
      </View>
      
    </Gradient>
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
    //borderWidth: 1,
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
    //borderWidth: 1,
  },
  box2: {
    alignItems:'center',
    justifyContent:'center',
    width:width*.75,
    height:height*.025,
    backgroundColor:'transparent',
    //borderWidth: 1,
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
    //borderWidth:1,
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
    //borderWidth: 1,
  },
  /*****************SignUp****************/
});