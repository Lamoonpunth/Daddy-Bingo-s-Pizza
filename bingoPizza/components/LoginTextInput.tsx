import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Dimensions } from "react-native";

const {height, width} = Dimensions.get('screen');

const UselessTextInput = () => {
  const [username, onChangeText] = React.useState(null);
  const [password, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={username}
        placeholder="Username"

      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={password}
        placeholder="password"
        secureTextEntry={true}
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: width / 1.3,
    height: height * 0.065,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    
    
    
  },
});

export default UselessTextInput;