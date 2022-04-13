import React  from 'react';
import { StyleSheet,
  Image,
  Dimensions,} from 'react-native';
import { Text, View } from '../components/Themed';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function OrderTab({ navigation }: {navigation:any}) {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:50}}>
            นี่คือหน้าOrder
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
