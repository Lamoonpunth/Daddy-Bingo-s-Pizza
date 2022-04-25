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

    const [duedate, setDueDate] = React.useState('3');
    const [pizzaname, setPizzaName] = React.useState('Havana Pizza');
    const [day, setDay] = React.useState('Monday');
    const [price, setPrice] = React.useState('10');
    const [hrs, setHrs] = React.useState('12');
    const [mins, setMins] = React.useState('00');


    const onClickBack = () =>{
        navigation.goBack();
    }

    const onEditPlan = () =>{
        navigation.navigate('SubscriptionSummary');
    }

    const [test,onTest] = React.useState([
        {key:1,name:'A'},
        {key:2,name:'A'},
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
                                    <Text style={styles.planremain}>{duedate} Weeks left</Text>
                                </View>
                                <View style={styles.detailBox}>
                                    <View style={styles.detailsrow1}>
                                        <Text style={styles.pizzaname}>{pizzaname}</Text>
                                        <Text style={styles.day}>every {day}</Text>
                                    </View>
                                    <View style={styles.detailsrow2}>
                                        <Text style={styles.price}>${price} per weeks</Text>
                                        <Text style={styles.time}>time: {hrs}:{mins}</Text>
                                        
                                    </View>
                                    <View style={styles.checkoutbtnbox}>
                                        <TouchableOpacity style={styles.checkoutbutton} onPress={onEditPlan}>
                                            <View style={{backgroundColor:'transparent'}}>
                                                <Text style={{fontSize:18, color: 'white'}}>Edit</Text>
                                            </View> 
                                        </TouchableOpacity>
                                    </View>

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
        alignItems:'center',
        width:screenWidth*0.8,
        height:screenHeight*0.05,
    },
    detailBox: {
        width:screenWidth*0.8,
        height:screenHeight*0.17,
    },
    planremain:{
        fontSize: 28,
        color:'red',
    },
    detailsrow1:{
        flexDirection:'row',
        margin:5,
        height:screenHeight*.04,
    },
    detailsrow2:{
        flexDirection:'row',
        margin:5,
        height:screenHeight*.04,
    },
    pizzaname:{
        width:screenWidth*.45,
        fontSize:17,
        marginLeft:screenWidth*.02
    },
    day:{
        width:screenWidth*.35,
        fontSize:17,
        
    },
    price:{
        width:screenWidth*.5,
        fontSize:15,
        marginLeft:screenWidth*.02
    },
    time:{
        width:screenWidth*.35,
        fontSize:15,
    },
    checkoutbtnbox:{
        flexDirection:'row-reverse',
        height: screenHeight*.06,
        width: screenWidth*.75,
    },
    checkoutbutton:{
        alignItems:'center',
        justifyContent:'center',
        width:screenWidth*.2,
        height:screenHeight*.0545,
        backgroundColor:'#FF6D6D',
        borderRadius:30,
        elevation:5,
    },
});