import React from "react";
import { 
    View ,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity,
    } from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import { globalStyles } from '../../styles/globalStyles';
import Gradient from '../../styles/Gradient';
//import { FlatList } from "react-native-gesture-handler";


export default function FoodCart({navigation}:{navigation:any}){
  const [Task, onClickTask] = React.useState([
    {num:'Order1' ,key:'1'},
    {num:'Order2' ,key:'2'},
    {num:'Order3' ,key:'3'},
    {num:'Order3' ,key:'4'},
    {num:'Order3' ,key:'5'},
    {num:'Order3' ,key:'6'},
    {num:'Order3' ,key:'7'},
    {num:'Order4' ,key:'8'},
    
  ]);
  
    const onCheckOut = () => {
      alert('จะกินมั้ย กินก็จ่าย');
    }
    const onClickAdminIcon = () =>{
      navigation.openDrawer();
    }

    return(
        <Gradient>
            <View style={styles.container}>
            <View style={styles.adminBox}>
            <TouchableOpacity onPress={onClickAdminIcon}>
              <Image source={require('../../assets/images/user_icon.png')} style={styles.adminIcon}/>  
            </TouchableOpacity>
              </View>
                <View style={styles.header}>
                
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {navigation.goBack()}}>
                        <Image source={require('../../assets/images/back_icon.png')} style={globalStyles.backIcon }/> 
                    </TouchableOpacity>
                    <Text style={globalStyles.fontHeader}>TASK</Text> 
                </View>
                <View style={styles.TaskTrack}>
                    <View style={styles.flatContainer}>
                    <FlatList
                          
                          numColumns={1}
                          data={Task}
                          renderItem={({item}) => (
                            <View style={styles.taskOrder}  key={item.key} /*onPress={()=>onClickTask(item.num)}*/>
                              <Text>{item.num}</Text>
                            <View style ={styles.bottontoleftside}>  
                              <View style = {styles.forrowview}>
                              <TouchableOpacity style={styles.ac_rjbox} onPress={onCheckOut}>
                            <Text style={styles.normalFont}>reject</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.acbox} onPress={onCheckOut}>
                            <Text style={styles.normalFont}>accept</Text>
                          </TouchableOpacity>
                            </View>
                            </View>
                            </View>
                            )}
                            
                      />
                    </View>
                    
                </View>

                <TouchableOpacity style={styles.LogoutBox} onPress={onCheckOut}>
                  <Text style={styles.checkoutFont}>Log out</Text>
                </TouchableOpacity>
            
            </View>
        </Gradient>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //borderWidth: 1,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: 'transparent',
    },
    header: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
    },
    iconContainer: {
      width:screenWidth*0.1,
      flexDirection:'row',
      borderWidth: 1,
      alignItems:'flex-start'
    },
    TaskTrack: {
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:screenWidth*.9,
      height:screenHeight*.75,
      backgroundColor:'#fff',
      borderRadius:50,
      elevation: 10,
    },
    flatContainer: {
      flexDirection:'row',
      alignItems:'flex-start',
      justifyContent:'center',
      width:screenWidth*.89,
      //borderWidth: 1,
      height:screenHeight*.65,
     
      backgroundColor:'#fff',
    },
    
    boxImage: {
      borderRadius:20,
      backgroundColor:'white',
      width:screenHeight*0.125,
      height:screenHeight*0.125,
      borderWidth:1
    },
    boxDetails: {
      backgroundColor:'transparent',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:screenHeight*0.2,
      height:screenHeight*0.2,
    },
    serviceFont:{
      fontSize: 18,
      width: screenHeight*0.2,
      height: screenHeight * 0.05,
      margin: 8,
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'white',
      elevation: 12,
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
    //--------------------แถบบน--------------------//
    adminBox: {
      flexWrap:'wrap',
      flexDirection:'row',
      borderWidth:1,
      width:screenWidth*0.85,
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
      borderWidth:2,
      borderColor:'gray',
      backgroundColor:'white',
      width:screenWidth*0.85,
      height:screenHeight*0.15,
      flexDirection:'column',
      alignItems:'flex-start',
      justifyContent:'center',
      
    },
    forrowview:{
      width:screenWidth*0.4,
      height:screenWidth*0.06,
      flexDirection:'row',
      //borderWidth: 1,
      alignItems:'center',
      justifyContent:'space-evenly',
      marginVertical: 1,
      marginHorizontal:1,
    },
    bottontoleftside:{
      width:screenWidth*0.85,
      height:screenHeight*0.05,
     // borderWidth:1,
      alignItems:'flex-end',
      justifyContent:'center',

    },
    ac_rjbox: {
      flexDirection:'row',
      borderWidth:1,
      width:screenWidth*0.15,
      height:screenWidth*.05,
      justifyContent: 'center',
      borderRadius:50,
    },
    acbox: {
      flexDirection:'row',
      borderWidth:1,
      width:screenWidth*0.15,
      height:screenWidth*.05,
      justifyContent: 'center',
      backgroundColor: '#FF6D7D',
      borderRadius:50,

    },
    normalFont:{
      fontSize: 11,
      color:'#330000',
    },
    
});
