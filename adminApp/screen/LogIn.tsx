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
    const [bordercolorusername, setBorderColorUsername] = React.useState(false);
    const [bordercolorpass, setBorderColorPass] = React.useState(false);
    
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
            setBorderColorUsername(true);
            setBorderColorPass(true);
            alert("Please enter your username and password.");
          }
          else if (username==''){
            setBorderColorUsername(true);
            setBorderColorPass(false);
            alert("Please enter your username.");
          }
          else if (password==''){
            setBorderColorUsername(false);
            setBorderColorPass(true);
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
              setBorderColorUsername(true);
              setBorderColorPass(true);
              alert(data)
            }
            else
            {
              setBorderColorUsername(false);
              setBorderColorPass(false);
              navigation.navigate('Admin', {screen:'Home', params:{userid:data}});
            }
          }).catch(error=>alert(error))
          }
            onChangeUser('');
            onChangePass('');
    
        })
        .catch(error=>{alert("Cannot connect to server")})
      }
      else if (ModeLogIn == 'Chef') {
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
            setBorderColorUsername(true);
            setBorderColorPass(true);
            alert("Please enter your username and password.");
          }
          else if (username==''){
            setBorderColorUsername(true);
            setBorderColorPass(false);
            alert("Please enter your username.");
          }
          else if (password==''){
            setBorderColorUsername(false);
            setBorderColorPass(true);
            alert("Please enter your password.");
          }
          else{
            const controller = new AbortController()
      
            // 1 second timeout:
            const timeoutId = setTimeout(() => controller.abort(), 1000)
      
            const target =  "http://10.0.2.2:3000/login-chef"
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
              setBorderColorUsername(true);
              setBorderColorPass(true);
              alert(data)
            }
            else
            {
              setBorderColorUsername(false);
              setBorderColorPass(false);
              navigation.navigate('Chef', {screen:'Home', params:{userid:data}});
            }
          }).catch(error=>alert(error))
          }
            onChangeUser('');
            onChangePass('');
    
        })
        .catch(error=>{alert("Cannot connect to server")})
      }
      else if (ModeLogIn == 'Rider'){
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
            setBorderColorUsername(true);
            setBorderColorPass(true);
            alert("Please enter your username and password.");
            
          }
          else if (username==''){
            setBorderColorUsername(true);
            setBorderColorPass(false);
            alert("Please enter your username.");
          }
          else if (password==''){
            setBorderColorUsername(false);
            setBorderColorPass(true);
            alert("Please enter your password.");
          }
          else{
            const controller = new AbortController()
      
            // 1 second timeout:
            const timeoutId = setTimeout(() => controller.abort(), 1000)
      
            const target =  "http://10.0.2.2:3000/login-rider"
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
              setBorderColorUsername(true);
              setBorderColorPass(true);
              alert(data)
            }
            else
            {
              setBorderColorUsername(false);
              setBorderColorPass(false);
              navigation.navigate('Rider', {screen:'Home', params:{userid:data}});
            }
          }).catch(error=>alert(error))
          }
            onChangeUser('');
            onChangePass('');
    
        })
        .catch(error=>{alert("Cannot connect to server")})
      }
    }
    /*------------------------------------------------------------------------------------------------*/

    return (
          <Gradient>

            <View style={styles.pizzaBox}>
              <Image source={require('../assets/images/pizza(login).png')} style={styles.pizzaImage}/>
            </View>

            <View style={styles.container}>
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
                  style={{
                    fontSize: 12,
                    width: screenWidth *.6,
                    height: screenHeight * 0.055,
                    margin: 8,
                    padding: 10,
                    borderRadius: 30,
                    borderWidth:1,
                    borderColor: bordercolorusername? 'red': 'white',
                    backgroundColor: 'white',
                    elevation: 12,
                  }}
                  onChangeText={onChangeUser}
                  value={username}
                  placeholder="Username"
                  />
                  <TextInput
                    style={{
                      fontSize: 12,
                      width: screenWidth *.6,
                      height: screenHeight * 0.055,
                      margin: 8,
                      padding: 10,
                      borderRadius: 30,
                      borderWidth:1,
                      borderColor: bordercolorpass? 'red': 'white',
                      backgroundColor: 'white',
                      elevation: 12,
                    }}
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
    height: screenHeight/2,
  },
  pizzaImage: {
    width: 400,
    height: 400,
  },
  container: {
    width: screenWidth,
    height: screenHeight/2,
    alignItems:'center',
    justifyContent:'center'
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
  fontLogIn:{
    fontSize: 12,
    width: screenWidth *.6,
    height: screenHeight * 0.055,
    margin: 8,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 12,
  },
});
