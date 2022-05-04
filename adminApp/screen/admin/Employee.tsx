import React,{useState} from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    } from "react-native";

import Gradient from "../../styles/Gradient";
import { globalStyles } from "../../styles/globalStyles";
import SwitchSelector from "react-native-switch-selector";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
import { useFocusEffect } from '@react-navigation/native';

export default function Employee({navigation,route}:{navigation:any,route:any}){   

    const [employeeType, setEmployeeType] = React.useState('Chef');
    const EmployeeOptions = [
        { label: "Chef", value: "Chef" },
        { label: "Rider", value: "Rider" },
      ];

    const [chef, setChef] = React.useState([
        {key:1, fname:'test', lname:'test' ,phonenumber:'111'},
        {key:2, fname:'test', lname:'test' ,phonenumber:'111'},
        {key:3, fname:'test', lname:'test' ,phonenumber:'111'},
        {key:4, fname:'test', lname:'test' ,phonenumber:'111'},
    ]);

    const [rider, setRider] = React.useState([
        {key:1, fname:'test', lname:'test' ,phonenumber:'111'},
        {key:2, fname:'test', lname:'test' ,phonenumber:'111'},
        {key:3, fname:'test', lname:'test' ,phonenumber:'111'},
        {key:4, fname:'test', lname:'test' ,phonenumber:'111'},
    ]);
   
    const onBackButton = () => {
        navigation.goBack();
    }

    const onRemoveChef = (item:any,index:any) =>{

    }

    const onRemoveRider = (item:any,index:any) =>{
        
    }

    useFocusEffect(
        React.useCallback(() => {      
            fetch('http://10.0.2.2:3000/getallrider')
            .then(response => response.json())
            .then(json => {
                setRider(json)
            })          
            
            fetch('http://10.0.2.2:3000/getallchef')
            .then(response => response.json())
            .then(json => {
                    setChef(json)
            }) 
                            
        }, [])
      );


    return(
        <Gradient>
            <View style={styles.header}>
                <View style={styles.iconContainer} >
                    <TouchableOpacity style={styles.backIcon} onPress={onBackButton}>
                        <Image source={require('../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
                    </TouchableOpacity>

                    <Text style={styles.headerfont}>Employees</Text>

                    <View style={styles.backIcon}></View>
                    
                </View>
                <View style={styles.underline}></View>
            </View>
            <View style={styles.switchSelectorBox}>
                <SwitchSelector
                onPress={(value: any) => setEmployeeType(value)}
                options={EmployeeOptions}
                initial={0}
                textColor='#FF6D6D'
                selectedTextStyle={{color:'#FFFFFF'}}
                buttonColor='#FF6D6D'
                borderColor='#E5E5E5'
                fontSize={20}
                hasPadding
                />
            </View>
            <View style={styles.registerOptions}>
                {employeeType == 'Chef'?
                <FlatList
                    data={chef}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item,index}) => (
                        <View style={styles.options}>
                            <View style={styles.optionsImage}>
                                <Image source={require('../../assets/images/service.png')} style={styles.image}/>
                            </View>
                            <View style={styles.optionsName}>
                                <View style={styles.optionsRemove}>
                                    <Text style={{fontSize:24,fontWeight:'900',color:'#FF6D6D'}}>ข้อมูลพนักงาน</Text>    
                                    <TouchableOpacity onPress={() => onRemoveChef(item,index)}>
                                        <Text style={{fontSize:24,fontWeight:'900',color:'#FF6D6D'}}>x</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.fontDetail}>ชื่อ:{item.fname}</Text>
                                <Text style={styles.fontDetail}>นามสกุล:{item.lname}</Text>
                                <Text style={styles.fontDetail}>เบอร์:{item.phonenumber}</Text>
                            </View>
                            
                        </View>
                    )}
                />  
                :
                <FlatList
                    data={rider}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item,index}) => (
                        <View style={styles.options}>
                            <View style={styles.optionsImage}>
                                <Image source={require('../../assets/images/service.png')} style={styles.image}/>
                            </View>
                            <View style={styles.optionsName}>
                                <View style={styles.optionsRemove}>
                                    <Text style={{fontSize:24,fontWeight:'900',color:'#FF6D6D'}}>ข้อมูลพนักงาน</Text>    
                                    <TouchableOpacity onPress={() => onRemoveRider(item,index)}>
                                        <Text style={{fontSize:24,fontWeight:'900',color:'#FF6D6D'}}>x</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.fontDetail}>ชื่อ:{item.fname}</Text>
                                <Text style={styles.fontDetail}>นามสกุล:{item.lname}</Text>
                                <Text style={styles.fontDetail}>เบอร์:{item.phonenumber}</Text>
                            </View>
                        </View>
                    )}
                />  
                }   
            </View>
        </Gradient>
    ); 
}

const styles = StyleSheet.create({
    header: {
        width: screenWidth * 0.9,
        height: screenHeight * 0.1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerfont:{
        fontSize: 34,
        color:'white',
    },
    backIcon: {
        width:screenWidth*0.1,
        height:screenHeight*.03,
    },
    iconContainer: {
        width: screenWidth * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    underline:{
        width:screenWidth*.7,
        height:screenHeight*0.0035,
        backgroundColor:'white',
    },
    switchSelectorBox: {
        width:screenWidth*.6,
        backgroundColor:'transparent',
    },
    registerOptions: {
        width:screenWidth*.9,
        height:screenHeight*0.7,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    options: {
        width:screenWidth*.8,
        height:screenHeight*0.25,
        elevation:10,
        borderRadius:20,
        backgroundColor:'white',
        flexDirection:'row',
        marginVertical:10,
    },
    optionsImage: {
        flexDirection:'row',
        width:screenWidth*.25,
        height:screenHeight*0.25,
        alignItems:'center',
        justifyContent:'center',
    },
    image: {
        width: screenWidth*.2,
        height: screenWidth*.2,
    },
    optionsName: {
        flexDirection:'column',
        width:screenWidth*.55,
        height:screenHeight*0.25,
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    optionsRemove: {
        flexDirection:'row',
        width:screenWidth*.45,
        height:40,
        alignItems:'center',
        justifyContent:'space-between',
    },
    fontDetail: {
        fontSize:18,
        fontWeight:'900',
        color:'#FF6D6D',
        width:screenWidth*.5,
        height:40,
        backgroundColor:'white',
        borderRadius:10,
        elevation:10,
        flexDirection:'row',
        textAlign:'left',
        padding:5
    },
});