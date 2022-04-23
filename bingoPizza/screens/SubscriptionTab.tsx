import React from "react";
import { 
    View ,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    } from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import Gradient from "../styles/Gradient";

export default function Subscription({navigation}:{navigation:any}){

    const [PizzaName, onChangePizzaName] = React.useState('');
    const [Time, onChangeTime] = React.useState('');
    const [recommend, onClickRec] = React.useState([
        {menu:'Pizza1' ,key:'1'},
        {menu:'Pizza2' ,key:'2'},
        {menu:'Pizza3' ,key:'3'},
      ]);

    const onClickRecommend = () =>{
    
    };
    const onClickBack = () =>{
        navigation.navigate('Order')
    };
    const onClickAddSubscriptionOrder = () =>{
    
    };
    /**************** ../assets/images/backwhite_icon.png'  */
    return(
        <Gradient>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.space2}/>
                    <View style={styles.space3}/>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.spacebtwicon1}/>
                        <TouchableOpacity onPress={onClickBack}>
                            <Image source={require('../assets/images/backwhite_icon.png')} style={styles.backIcon}/>
                        </TouchableOpacity>
                        <View style={styles.spacebtwicon2}/>
                        <Text style={{fontSize: 36,color: "white"}}>Subscription</Text>
                        <View style={styles.spacebtwicon3}/>
                    </View>
                </View>
                <View style={styles.space}/>
                <View style={styles.space1}>

                    <TouchableOpacity style={styles.subbox1} onPress={onClickRecommend}>
                        <Image source={require('../assets/images/pooh.jpg')} style={styles.image}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onClickAddSubscriptionOrder}>
                        <View style={styles.subbox2}>
                        </View>

                    </TouchableOpacity>

                    
                </View>

                
            </View>
            
        </Gradient>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:-50,
      marginBottom:50,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: 'transparent',
    },
    /************************ Header ***************************/
    header: {
        marginVertical:10,
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        borderRadius: 35,
        backgroundColor: "#FF6D6D",
        height: screenHeight * .15,
        width: screenWidth,
        elevation: 10,
    },
    backIcon: {
        backgroundColor: '#FF6D6D',
        marginTop:5,
        height: screenHeight * .055,
        width: screenWidth*.055,
    },
    spacebtwicon1: {
        backgroundColor: '#FF6D6D',
        height: screenHeight * .01,
        width: screenWidth*.075,
    },
    spacebtwicon2: {
        backgroundColor: '#FF6D6D',
        height: screenHeight * .01,
        width: screenWidth*.15,
    },
    spacebtwicon3: {
        backgroundColor: '#FF6D6D',
        height: screenHeight * .01,
        width: screenWidth*.3,
    },
    
    space3: {
        backgroundColor: '#FF6D6D',
        height: screenHeight * .0325,
        width: screenWidth*.9,
    },

    space2: {
        backgroundColor: 'red',
        height: screenHeight * .03,
        width: screenWidth*.9,
    },
    /******************** Middle *********************** */
    space: {
        backgroundColor: 'transparent',
        height: screenHeight * .005,
        width: screenWidth*.95,

    },
    space1: {
        flexDirection:'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        height: screenHeight * .77,
        width: screenWidth*.95,
    },
    image: {
        marginTop:25,
        flex: 1,
        justifyContent: "center",
        borderRadius:20,
        opacity: 0.4,
        height: screenHeight *.2,
        width: screenWidth*.8,
      },
      
    subbox1:{
        margin: 10,
        backgroundColor: 'white',
        borderRadius:20,
        height: screenHeight *.2,
        width: screenWidth*.8,
    },
    subbox2:{
        margin: 10,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius:20,
        height: screenHeight *.2,
        width: screenWidth*.8,
    },
});