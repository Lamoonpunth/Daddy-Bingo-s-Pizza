import React from "react";
import { 
    View ,
    Text,
    Image,
    FlatList,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    } from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import Gradient from "../styles/Gradient";

export default function Subscription({navigation}:{navigation:any}){

    const onClickBack = () =>{
        navigation.goBack();
    }

    const [test,onTest] = React.useState([
        {key:1,name:'A'},
        {key:2,name:'A'},
        {key:3,name:'A'},
        {key:4,name:'A'},
        {key:5,name:'A'},
        {key:6,name:'A'},
        {key:7,name:'A'},
        {key:8,name:'A'},
        {key:9,name:'A'},
        {key:10,name:'A'},
        {key:11,name:'A'},
        {key:12,name:'A'},
    ])

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
                <View>
                    <FlatList
                        style={{width:screenWidth}}
                        data={test}
                        renderItem={({item}) => (
                        <TouchableOpacity key={item.key}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                        )}
                    />     
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
      justifyContent: 'flex-start',
      paddingTop:25,
      backgroundColor: 'transparent',
    },
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
    listContainer: {
        alignItems:'center',
        width:screenWidth,
        height:screenHeight*0.7
    }
});