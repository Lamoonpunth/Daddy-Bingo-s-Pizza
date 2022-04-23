import React from "react";
import { 
    View ,
    Text,
    Image,
    FlatList,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    } from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import Gradient from "../styles/Gradient";
import { globalStyles } from "../styles/globalStyles";

export default function FoodCart({navigation}:{navigation:any}){
    
    const onCheckOut = () => {
      alert('จะกินมั้ย กินก็จ่าย');
    }
    /**numTest กับ testสร้างมาลองเฉยๆเอาไปลบได้เลย**/
    const [numTest, onnumTest] = React.useState(0);

    const [test,onTest] = React.useState([
      {key:1,name:'A'},
    ]);

    return(
        <Gradient>
            <View style={styles.container}>
                
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {navigation.goBack()}}>
                        <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon}/>  
                    </TouchableOpacity>
                    <Text style={globalStyles.fontHeader}>ตะกร้าของคุณ</Text>
                    
                </View>

                <View style={styles.cartContainer}>
                  <View style={styles.flatContainer}>
                    <FlatList
                      data={test}
                      renderItem={({item}) => (
                        <View style={styles.menu} key={item.key}>
                            <View style={styles.boxImage}>
                            </View>
                            <View style={styles.boxDetails}>
                              <Text style={styles.cartFont}>ชื่อสินค้า</Text>
                              <Text style={styles.cartFont}>รายละเอียด</Text>
                              <Text style={styles.cartFont}>จำนวนสินค้า : {numTest}</Text>
                            </View>
                        </View>
                        )}
                    />
                  </View>
                    
                </View>

                <TouchableOpacity style={styles.checkoutBox} onPress={onCheckOut}>
                  <Text style={styles.checkoutFont}>Check out</Text>
                </TouchableOpacity>
            
            </View>
        </Gradient>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: 'transparent',
    },
    header: {
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
    iconContainer: {
      width:screenWidth*0.9,
      flexDirection:'row',
      alignItems:'flex-start'
    },
    cartContainer: {
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:screenWidth*.9,
      height:screenHeight*.7,
      backgroundColor:'#fff',
      borderRadius:50,
      elevation: 10,
    },
    flatContainer: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      width:screenWidth*.8,
      height:screenHeight*.65,
      backgroundColor:'#fff',
    },
    menu: {
      marginVertical:5,
      borderRadius:50,
      borderColor:'gray',
      backgroundColor:'#FF6D7D',
      width:screenWidth*0.8,
      height:screenHeight*0.25,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
      elevation: 5,
    },
    boxImage: {
      borderRadius:20,
      backgroundColor:'white',
      width:screenHeight*0.125,
      height:screenHeight*0.125,
    },
    boxDetails: {
      backgroundColor:'transparent',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:screenHeight*0.2,
      height:screenHeight*0.2,
    },
    cartFont:{
      fontSize: 20,
      width: screenHeight*0.2,
      height: 50,
      margin: 8,
      padding: 10,
      borderRadius: 20,
      backgroundColor: 'white',
      elevation: 4,
    },
    checkoutBox:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width: screenWidth*0.8,
      height: screenHeight * 0.075,
      borderRadius: 10,
      backgroundColor: '#FF6D7D',
      marginVertical:10,
      elevation: 12,
    },
    checkoutFont:{
      fontSize: 24,
      color:'white',
    },
});