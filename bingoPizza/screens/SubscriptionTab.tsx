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
import SwitchSelector from "react-native-switch-selector";

export default function Subscription({navigation,route}:{navigation:any,route:any}){
   
    const onBackButton = () =>{
        navigation.goBack()
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
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {onBackButton()}}>
                        <Image source={require('../assets/images/back_icon.png')} style={globalStyles.backIcon}/>  
                    </TouchableOpacity>
                    <Text style={globalStyles.fontHeader}>Subscription</Text>
                    <View style={globalStyles.underline}></View>  
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
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop:25,
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
    listContainer: {
        alignItems:'center',
        width:screenWidth,
        height:screenHeight*0.7
    }
});