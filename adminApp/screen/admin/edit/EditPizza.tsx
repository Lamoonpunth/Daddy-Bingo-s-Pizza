import React  from 'react';
import { StyleSheet,
    Text,
    View,
    Dimensions,} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function EditPizza({navigation}:{navigation:any}) {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:50}}>
            EditPizza Screen
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6D6D',
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
});
