import React  from 'react';
import { StyleSheet, 
  TextInput, 
  Dimensions, 
  KeyboardAvoidingView,
  Platform,
  Keyboard } from 'react-native';
import RegInput from '../components/ReginfoInput';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Information</Text>
      <View style={styles.roundedrec}>
        <RegInput/>
      </View>
      
      
    </View>
  );
}

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6D6D'
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 30,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  roundedrec: {
    borderWidth:0,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*75/100,
    height:screenHeight*55/100,
    backgroundColor:'#fff',
    borderRadius:50,
  },

});
