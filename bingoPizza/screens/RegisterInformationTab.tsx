import React  from 'react';
import { StyleSheet, TextInput, Dimensions, KeyboardAvoidingView,Platform,Keyboard,Button,Alert,TouchableOpacity } from 'react-native';
import RegInput from '../components/ReginfoInput';

import { Text, View } from '../components/Themed';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const {height, width} = Dimensions.get('screen');



export default function TabOneScreen({navigation}) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Information</Text>
      <View style={styles.space1}/>

      <View style={styles.roundedrec}>
        <RegInput/>
        <View style={styles.space2}/>

      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6D6D'
  },
  space1: {
    alignItems:'center',
    justifyContent:'center',
    width:width*.75,
    height:height*.015,
    backgroundColor:'transparent',
  },
  space2: {
    alignItems:'center',
    justifyContent:'center',
    width:width*.75,
    height:height*.25,
    backgroundColor:'transparent',
    borderWidth: 1,
  },
  spaceforbutton: {
    alignItems:'center',
    justifyContent:'center',
    width:width*.75,
    height:height*.06,
    backgroundColor:'transparent',
    borderWidth: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 30,
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'normal',
    color: 'white',
    
  },
  roundedrec: {
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*.97,
    height:screenHeight*.6,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 12,
  },
  savebutton:{
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:width*36/100,
    height:height*6/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
  },
  pickerboxinside:{
    alignItems:'center',
    justifyContent:'center',
    width:width*.24,
    height:height*0.055,
    backgroundColor:'green',
    borderRadius:50,
    elevation: 12,
  },

});
