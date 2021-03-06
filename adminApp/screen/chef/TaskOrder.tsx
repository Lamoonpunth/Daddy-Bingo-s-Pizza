import React from "react";
import { 
    View ,
    Text,
    Image,
    Alert,
    Dimensions,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity,
    TabBarIOSItem,
    } from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import { globalStyles } from '../../styles/globalStyles';
import Gradient from '../../styles/Gradient';
import { useFocusEffect } from '@react-navigation/native';
//import { FlatList } from "react-native-gesture-handler";


export default function TaskOrder({navigation, route}:{navigation:any,route:any}){
 
  const [Task, onClickTask] = React.useState([
    {key:'1', _id:11, user_fname:'', user_lname:'', status:'waiting for kitchen',},
    
  ]);
    const onReject = (item:any) => {
     navigation.navigate('TaskDeny',{order:item})
    }
    const checkPrepareMenu = (item:any,index:any) => {
        navigation.navigate('TaskPrepare',{order:item,status:item.status})
    }

    const updateAcceptedTask = (item:any,index:any) =>{
      fetch("http://10.0.2.2:3000/kitchenaccept",{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
            _id: item._id,
        })
      })
      .then(response=>response.json())
      .then(data => {console.log(data)
        //updateAcceptedTask(item,index)
        navigation.navigate('TaskPrepare',{order:item})})
    }
    const onLogOut = () => {
      Alert.alert(
        "Are you sure?",
        "Have a good day sir.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel"),
            style: "cancel"
          },
          { text: "Log Out", onPress: () => navigation.pop()}
        ]
      );
    }
    
    const onClickAdminIcon = () =>{
      navigation.openDrawer();
    }

    const getWaitforkitchen = () =>{
      fetch('http://10.0.2.2:3000/getwaitingforkitchenandpreparingorder')
      .then(response => response.json())
      .then(order => {onClickTask(order)})
    }
      useFocusEffect(
      React.useCallback(() => {
        getWaitforkitchen()
      }, [])
    );
    return(
        <Gradient>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.adminBox}>
                <TouchableOpacity onPress={onClickAdminIcon}>
                  <Image source={require('../../assets/images/user_icon.png')} style={styles.adminIcon}/>  
                </TouchableOpacity>
              </View>
              <Text style={globalStyles.fontHeader}>TASK</Text> 
              <View style={styles.iconContainer}>
              </View>
            </View>
            <View style={styles.TaskTrack}>
              <View style={styles.flatContainer}>
                <FlatList
                  numColumns={1}
                  data={Task}
                  keyExtractor={(item:any) => item._id}
                  renderItem={({item,index}) => (
                    <TouchableOpacity style={styles.taskOrder}  key={item._id} onPress={()=>checkPrepareMenu(item,index)}>
                      <Text style={styles.taskFont}>{item.user_fname} {item.user_lname}</Text>
                      <View style ={styles.bottontoleftside}> 
                        {item.status == 'waiting for kitchen'?
                        <View style = {styles.forrowview}>
                          <TouchableOpacity style={styles.ac_rjbox} onPress={() =>onReject(item)}>
                            <Text style={styles.normalFont1}>reject</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.acbox} onPress={() =>updateAcceptedTask(item,index)}>
                            <Text style={styles.normalFont2}>Accept</Text>
                          </TouchableOpacity>
                        </View>
                        :
                        <View style = {styles.forrowview}>
                          <View style={styles.incombox}>
                            <Text style={styles.normalFont2}>Incomplete</Text>
                          </View>
                        </View>
                        } 
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>   
            </View>
            <TouchableOpacity style={styles.LogoutBox} onPress={onLogOut}>
              <Text style={styles.checkoutFont}>Log out</Text>
            </TouchableOpacity>
          </View>
        </Gradient>
    );

}

const styles = StyleSheet.create({
    container: {
      paddingVertical:50,
      width:screenWidth,
      height:screenHeight,
      alignItems:'center',
      justifyContent:'space-evenly',
      backgroundColor: 'transparent',
    },
    header: {
      width:screenWidth*.8,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
    },
    iconContainer: {
      width:screenWidth*0.1,
      flexDirection:'row',
      alignItems:'flex-start'
    },
    TaskTrack: {
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:screenWidth*.9,
      height:screenHeight*.6,
      backgroundColor:'#fff',
      borderRadius:50,
      elevation: 10,
    },
    flatContainer: {
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:screenWidth*.89,
      height:screenHeight*0.5,
     
      backgroundColor:'#fff',
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
    LogoutBox:{
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
    //--------------------???????????????--------------------//
    adminBox: {
      flexWrap:'wrap',
      flexDirection:'row',
      width:screenWidth*0.15,
      height:screenWidth*0.125
    },
    adminIcon: {
      borderRadius:50,
      backgroundColor:'white',
      width:screenWidth*0.125,
      height:screenWidth*0.125,
    },
    //-----------------Flatlist Task------------//
    taskOrder: {
      marginVertical:4,
      borderRadius:20,
      borderWidth:1,
      borderColor:'rgba(0,0,0,.1)',
      backgroundColor:'white',
      width:screenWidth*0.85,
      height:screenHeight*0.15,
      flexDirection:'column',
      alignItems:'flex-start',
      justifyContent:'center',
      elevation:8,
      
    },
    taskFont: {
      paddingLeft:20,
      textAlign:'left',
      fontSize:28,
      width:screenWidth*0.85,
    },
    forrowview:{
      width:screenWidth*0.5,
      height:screenWidth*0.06,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
      marginVertical: 1,
      marginHorizontal:1,
    },
    bottontoleftside:{
      width:screenWidth*0.85,
      height:screenHeight*0.05,
      alignItems:'flex-end',
      justifyContent:'center',

    },
    ac_rjbox: {
      flexDirection:'row',
      width:screenWidth*0.2,
      height:25,
      justifyContent: 'center',
      borderRadius:50,
      backgroundColor:'white',
      elevation:8,
    },
    acbox: {
      flexDirection:'row',
      width:screenWidth*0.2,
      height:25,
      justifyContent: 'center',
      backgroundColor: '#FF6D7D',
      borderRadius:50,
      elevation:8,
    },
    incombox: {
      flexDirection:'row',
      width:screenWidth*0.3,
      height:25,
      justifyContent: 'center',
      backgroundColor: '#FF6D7D',
      borderRadius:50,
      elevation:8,
    },
    normalFont1:{
      fontSize: 16,
      color:'#FF6D7D',
    },
    normalFont2:{
      fontSize: 16,
      color:'#fff',
    },
    
});
