import React,{useState}  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,} from 'react-native';

import { globalStyles } from '../styles/globalStyles';
import Gradient from '../styles/Gradient';
import SwitchSelector from "react-native-switch-selector";
const crypto = require('crypto-js');
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function LogIn({navigation}: {navigation: any}) {
 
  const ModeOptions = [
    { label: "Admin", value: "Admin" },
    { label: "Chef", value: "Chef" },
    { label: "Rider", value: "Rider" }
  ];

    const [ModeLogIn , onChangeMode] = React.useState('Admin');

    /*---------------------------------------------LogIn----------------------------------------------*/
    const [username , onChangeUser] = React.useState('');
    const [password , onChangePass] = React.useState('');
    
    const onLogIn = () => {
      if (ModeLogIn == 'Admin') {
        console.log(username)
        console.log(password)
        const controller = new AbortController()

        // 1 second timeout:
        const timeoutId = setTimeout(() => controller.abort(), 1000)
        fetch("http://10.0.2.2:3000/online",{
          method:"post",
          signal:controller.signal
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if (username=='' && password==''){
            alert("Please enter your username and password.");
          }
          else if (username==''){
            alert("Please enter your username.");
          }
          else if (password==''){
            alert("Please enter your password.");
          }
          else{
            const controller = new AbortController()
      
            // 1 second timeout:
            const timeoutId = setTimeout(() => controller.abort(), 1000)
      
            const target =  "http://10.0.2.2:3000/login-admin"
            fetch(target,{
            method:'post',
            headers:{
                'Content-Type': 'application/json'
            },
            
            signal:controller.signal,
      
            body: JSON.stringify({
              "username" : username,
              "password" : password
            }
            )
          })
          .then(res=>res.json())
          
          .then(data=>{
            console.log(data)
            if (data == "Invalid username or password")
            {
              alert(data)
            }
            else
            {
              navigation.navigate('Admin');
            }
          }).catch(error=>alert(error))
          }
            onChangeUser('');
            onChangePass('');
    
        })
        .catch(error=>{alert("Cannot connect to server")})
      }
      else if (ModeLogIn == 'Chef') {
        alert('You are now logged in as Chef.');
        navigation.navigate('Chef');
      }
      else if (ModeLogIn == 'Rider'){
        alert('You are now logged in as Rider');
        navigation.navigate('Rider');
      }
    }
    /*------------------------------------------------------------------------------------------------*/

    return (
          <Gradient>

            <View style={{flex:1}}>
              <Image source={require('../assets/images/pizza(login).png')} style={styles.pizzaImage}/>
            </View>

            <View style={{flex:1 , alignItems:'center' , justifyContent:'center'}}>
              <View style={globalStyles.LogInbox}>
                <View style={styles.switchSelectorBox}>
                  <SwitchSelector
                    onPress={(value: any) => onChangeMode(value)}
                    options={ModeOptions}
                    initial={0}
                    textColor='#FF6D6D'
                    selectedTextStyle={{color:'#FFFFFF'}}
                    buttonColor='#FF6D6D'
                    borderColor='#E5E5E5'
                    fontSize={20}
                    hasPadding
                  />
                </View>
                <View style={styles.logincontainer}>
                  <TextInput
                  style={globalStyles.fontLogIn}
                  onChangeText={onChangeUser}
                  value={username}
                  placeholder="Username"
                  />
                  <TextInput
                    style={globalStyles.fontLogIn}
                    onChangeText={onChangePass}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true} 
                  />
                  <TouchableOpacity style={globalStyles.loginbutton} onPress={onLogIn}>
                    <Text style={{fontSize:20, color: 'white'}}>
                      LogIn
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>  

          </Gradient>   
  );
}

const styles = StyleSheet.create({
  pizzaBox: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    height: screenHeight/2.3,
  },
  pizzaImage: {
    width: 400,
    height: 400,
  },
  switchSelectorBox: {
    width:screenWidth*.6,
  },
  logincontainer: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent',
    elevation:10
  },
});
