import React from "react";
import { Image, StyleSheet, TextInput, Dimensions, View, Text, Pressable} from "react-native";

const {height, width} = Dimensions.get('screen');

const RegInfoText = () => {
  const [firstname, onChangeName] = React.useState('');
  const [lastname, onChangeLast] = React.useState('');
  const [phone, onChangeNumber] = React.useState('');
  const [address, onChangeAddr] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image 
          style={styles.nameicon}
          source={require('../assets/images/user_icon.png')}
          />
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={firstname}
          placeholder="First Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeLast}
          value={lastname}
          placeholder="Last name"
        />

        
      </View>
      <View style={styles.box1}>
        <Image 
          style={styles.phonenumicon}
          source={require('../assets/images/phone_icon.png')}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={phone}
          placeholder="Phone number"
        />
        <Image 
          style={styles.birthicon}
          source={require('../assets/images/birthdate_icon.png')}
          />
          

      </View>
      <View style={styles.box1}>
        <Image 
          style={styles.phonenumicon}
          source={require('../assets/images/address_icon.png')}
        />
        <TextInput
          style={styles.input2}
          onChangeText={onChangeAddr}
          value={address}
          placeholder="Address"
        />

      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'transparent',
    borderWidth: 1,
  },
  input: {
    fontSize: 12,
    width: width *.27,
    height: height * 0.045,
    margin: 8,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 12,
  },
  input2: {
    fontSize: 12,
    width: width *.58,
    height: height * 0.045,
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
  loginbutton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:width*36/100,
    height:height*6/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
  },
  box1: {
    flexDirection: "row",

  },
  nameicon: {
    width: 30,
    height:45,
  },
  phonenumicon: {
    width: 30,
    height:45,
  },
  birthicon:{
    width: 30,
    height:40,
  },
  addricon:{
    width: 50,
    height:50,
  },
});

export default RegInfoText;