import React,{useEffect, useState}  from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    } from 'react-native';

import Gradient from '../styles/Gradient';
import { globalStyles } from '../styles/globalStyles';

const serverIP = "http://10.0.2.2:3000"
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function OrderAwait({navigation, route}:{navigation:any,route:any}) {
  
    const [status, onChangeStatus] = React.useState([
        {status:'Queueing'},
        {status:'Preparing'},
        {status:'Delivering'},
        {status:'Arriving'},
    ])

  return (
    <Gradient>
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerFont}>{status[0].status}</Text>
        </View>
        <View style={styles.status}>
            <View style={styles.statusBar}>
                <View style={styles.statusIcon}>
                    <View style={styles.iconBox}>

                    </View>
                </View>
                <View style={styles.statusIcon}>
                    <View style={styles.iconBox}>
                        
                    </View>
                </View>
                <View style={styles.statusIcon}>
                    <View style={styles.iconBox}>
                        
                    </View>
                </View>
                <View style={styles.statusIcon}>
                    <View style={styles.iconBox}>
                        
                    </View>
                </View>
            </View>
            <View style={styles.statusName}>
                <View style={styles.nameBox}>
                    <Text style={styles.nameFont}>Queueing</Text>
                </View>
                <View style={styles.nameBox}>
                    <Text style={styles.nameFont}>Preparing</Text>
                </View>
                <View style={styles.nameBox}>
                    <Text style={styles.nameFont}>Delivering</Text>
                </View>
                <View style={styles.nameBox}>
                    <Text style={styles.nameFont}>Arriving</Text>
                </View>
            </View>
            <View style={styles.statusBlank}>

            </View>
        </View>
        <View style={styles.orderSummary}>
            <View style={styles.orderBox}>
                <Text style={styles.orderHeadFont}>Order summary</Text>
                <Text style={styles.orderFont}>
                    123123
                </Text>
            </View>
        </View>
      </View>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:30
  },
  header: {
    flex:2,
    backgroundColor:'#FF6D6D',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*0.9,
    borderRadius:20,
    elevation:10
  },
  status: {
    flex:13,
    flexDirection:'row',
    backgroundColor:'transparent',
    width:screenWidth,
    borderWidth:1,
  },
  statusBar: {
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    borderWidth:1,
  },
  statusIcon: {
    flex:1,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth/3,
  },
  iconBox: {
    width:screenWidth*0.25,
    height:screenWidth*0.25,
    backgroundColor:'white',
    borderRadius:50,
  },
  statusName: {
    flex:1,
    borderWidth:1,
  },
  nameBox: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    width:screenWidth/3,
  },
  statusBlank: {
    flex:1,
    borderWidth:1,
  },
  orderSummary: {
    flex:5,
    backgroundColor:'transparent',
    width:screenWidth,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
  },
  orderBox: {
    width:screenWidth*0.9,
    height:screenHeight*4/20,
    borderWidth:1,
  },

  /*************************************Font*********************************/
  headerFont: {
    fontSize:32,
    color:'white',
  },
  nameFont: {
    textAlign:'center',
    textAlignVertical:'center',
    flex:1/3,
    width:screenWidth*0.25,
    fontSize:20,
    color:'#FF6D6D',
    backgroundColor:'white',
    borderRadius:15,
  },
  orderFont: {
    paddingLeft:10,
    flex:8,
    fontSize:18,
    borderWidth:1,
  },
  orderHeadFont: {
    flex:2,
    fontSize:20,
    borderWidth:1,
  },
});