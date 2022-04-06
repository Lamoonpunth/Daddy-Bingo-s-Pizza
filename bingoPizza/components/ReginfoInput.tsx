import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Dimensions, View, Text, Pressable} from "react-native";

const {height, width} = Dimensions.get('screen');

const RegInfoText = () => {
  const [firstname, onChangeName] = React.useState('');
  const [lastname, onChangeLast] = React.useState('');
  const [phone, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
        <View>

        </View>
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
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={phone}
        placeholder="Phone number"
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: width *60/100,
    height: height * 0.055,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    borderColor: 'gray',
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
});

export default RegInfoText;