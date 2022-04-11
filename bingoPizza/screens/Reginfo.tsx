import React  from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';
import RegInput from '../components/ReginfoInput';

import { Text, View } from '../components/Themed';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const {height, width} = Dimensions.get('screen');

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Information</Text>
      <View style={styles.space1}/>

      <View style={styles.roundedrec}>
        <RegInput/>
        <View style={styles.space2}/>
        <View style={styles.spaceforbutton}/>

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
    height:height*.3,
    backgroundColor:'transparent',
    borderWidth: 1,
  },
  spaceforbutton: {
    alignItems:'center',
    justifyContent:'center',
    width:width*.75,
    height:height*.07,
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
    width:screenWidth*.8,
    height:screenHeight*.6,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 12,
  },
  savebutton:{

  },

});
