import React,{useState} from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    } from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import Gradient from "../../styles/Gradient";
import { globalStyles } from "../../styles/globalStyles";

export default function RegisterId({navigation,route}:{navigation:any,route:any}){
    
    const {type} = route.params;
    const [Username, setUsername] = React.useState('');
    const [Password, setPassword] = React.useState('');
    const [confirmPassword ,setConfirmPassword] = React.useState('');

    const[Susernamestate, setSUsernameState] = React.useState(false);
    const[Suserpassstate, setSUserPassState] = React.useState(false);
    const[SuserCpassstate, setSUserCPassState] = React.useState(false);

    const onBackButton = () => {
        navigation.navigate('RegisterEmployee');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    }
    
    const onNextButton = () =>{
        if (Username == '' && Password == '' && confirmPassword == ''){
            alert('Please Enter Username and Password.')
        }
        else{
            navigation.navigate('RegisterInfo', {type:type,Username:Username,Password:Password});
            setUsername('');
            setPassword('');
            setConfirmPassword(''); 
        } 
    }

    return(
        <Gradient>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.iconContainer} >
                        <TouchableOpacity style={styles.backIcon} onPress={onBackButton}>
                            <Image source={require('../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
                        </TouchableOpacity>

                        <Text style={styles.headerfont}>Register {type}</Text>

                        <View style={styles.backIcon}></View>
                        
                    </View>
                    <View style={styles.underline}></View>
                </View>
                <View style={styles.options}>
                    <TextInput
                        value={Username}
                        onChangeText={setUsername}
                        placeholder='Username'
                        style={{
                            fontSize: 18,
                            width: screenWidth *.6,
                            height: screenHeight * 0.055,
                            margin: 8,
                            padding: 10,
                            borderRadius: 30,
                            borderWidth:1,
                            borderColor: Susernamestate? 'red' : 'white',
                            backgroundColor: 'white',
                            elevation: 12,
                          }}
                    />
                    <TextInput
                        value={Password}
                        onChangeText={setPassword}
                        placeholder='Password'
                        style={{
                            fontSize: 18,
                            width: screenWidth *.6,
                            height: screenHeight * 0.055,
                            margin: 8,
                            padding: 10,
                            borderRadius: 30,
                            borderWidth:1,
                            borderColor: Suserpassstate? 'red' : 'white',
                            backgroundColor: 'white',
                            elevation: 12,
                        }}
                    />
                    <TextInput
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder='Confirm password'
                        editable={Password==''? false:true}
                        style={{
                            fontSize: 18,
                            width: screenWidth *.6,
                            height: screenHeight * 0.055,
                            margin: 8,
                            padding: 10,
                            borderRadius: 30,
                            borderWidth:1,
                            borderColor: SuserCpassstate? 'red' : 'white',
                            backgroundColor: 'white',
                            elevation: 12,
                          }}
                    />
                    {confirmPassword != Password && confirmPassword!= '' && Password != ''?
                        <Text style={{fontSize:16,color:'red',}}>Your password doesn't match</Text>
                    :null}
                </View>
                <View style={styles.next}>
                    <TouchableOpacity style={styles.nextbutton} onPress={onNextButton}>
                        <View style={{backgroundColor:'transparent'}}>
                            <Text style={{fontSize:20, color: 'white'}}>Next</Text>
                        </View>  
                    </TouchableOpacity>
                </View>
            </View>
        </Gradient>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingVertical:30,
        alignItems:'center',
        justifyContent:'space-between'
    },
    header: {
        width: screenWidth * 0.9,
        height: screenHeight * 0.1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerfont:{
        fontSize: 34,
        color:'white',
    },
    backIcon: {
        width:screenWidth*0.1,
        height:screenHeight*.03,
    },
    iconContainer: {
        width: screenWidth * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    underline:{
        width:screenWidth*.7,
        height:screenHeight*0.0035,
        backgroundColor:'white',
    },
    options: {
        width:screenWidth*.8,
        height:screenHeight*0.25,
        elevation:10,
        borderRadius:20,
        backgroundColor:'white',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    next: {
        width:screenWidth*.9,
        height:screenHeight*0.075,//borderWidth:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    nextbutton: {
        flex:0.75,
        borderColor:'rgba(0,0,0,0)',
        alignItems:'center',
        justifyContent:'center',
        width:screenWidth*36/100,
        height:screenHeight*6/100,
        backgroundColor:'#FF6D6D',
        borderRadius:50,
        elevation:4,
    },
});