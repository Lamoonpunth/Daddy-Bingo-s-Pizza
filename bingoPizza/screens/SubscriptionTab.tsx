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
import { globalStyles } from "../styles/globalStyles";

export default function Subscription({navigation}:{navigation:any}){

    const onClickBack = () =>{
        navigation.goBack();
    }

    const [test,onTest] = React.useState([
        {key:1,name:'A'},
        {key:2,name:'A'},
        {key:3,name:'A'},
        {key:4,name:'A'},
    ])

    return(
        <Gradient>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backIcon} onPress={() => {onClickBack()}}>
                        <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon}/>  
                    </TouchableOpacity>
                    <Text style={globalStyles.fontHeader}>Subscription</Text>
                    <View style={globalStyles.underline}></View>  
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={test}
                        renderItem={({item}) => (
                            <View style={styles.menu} key={item.key}>
                                <View style={styles.dueDate}>

                                </View>
                                <View style={styles.detailBox}>

                                </View>  
                            </View>
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
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent',
    },
    header: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    backIcon: {
        width:screenWidth*0.9,
        flexDirection:'row',
        alignItems:'flex-start'
      },
    listContainer: {
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:screenWidth*.9,
        height:screenHeight*.7,
        backgroundColor:'transparent',
        borderRadius:50,
    },
    menu: {
        marginVertical:15,
        borderRadius:50,
        backgroundColor:'white',
        width:screenWidth*0.8,
        height:screenHeight*0.22,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        elevation:5
      },
    dueDate: {
        width:screenWidth*0.8,
        height:screenHeight*0.05,
        borderWidth:1
    },
    detailBox: {
        width:screenWidth*0.8,
        height:screenHeight*0.17,
        borderWidth:1,
    },
});