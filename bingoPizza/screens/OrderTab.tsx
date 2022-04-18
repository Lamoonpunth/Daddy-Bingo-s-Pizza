import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { Text, View } from '../components/Themed';
import { Categories,COLOURS } from '../constants/items';
import { RootTabScreenProps } from '../types';


const images = [
  'https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045_960_720.png',
  'https://cdn.pixabay.com/photo/2016/03/17/06/49/renovation-1262389_960_720.png',
  'https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_960_720.jpg'

]

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function OrderTab({ navigation }: RootTabScreenProps<'OrderTab'>) {
  const [imgActive, setimgActive] = useState(0);
  onchange = (nativeEvent) => {
    if(nativeEvent){
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
      if (slide != imgActive){
        setimgActive(slide)
      }
    }
   }
   const[currentSelected, setcurrentSelected] = useState([0])
   const renderCategories =({item , index}) =>{
    return(
      <TouchableOpacity activeOpacity={0.9}>
        <View
          style={{
            width:120,
            height: 180,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor:
              currentSelected == index ? COLOURS.accent : COLOURS.white,
              borderRadius: 20,margin: 10,elevation: 50
                 
          }}>
          <View style={{width: 60, height: 60}}>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'center',
              }}
            />
          </View>
          </View>  
      </TouchableOpacity>
    )

   }
  return (
    <View style={styles.container}>
        <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
              }}>
              <Image
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                  borderRadius: 500,
                }}
              />
            </TouchableOpacity>
            <Text style ={{fontSize : 16,color:'black',opacity:0.5 }}>
                  test
            </Text>
            </View>
      
      <View style={styles.wrap}>
        <ScrollView
          //onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {
            images.map((e, index) =>
              <Image
                key={e}
                resizeMode='contain'
                style={styles.wrap}
                source={{uri:e}}

              />
            )
          }
          </ScrollView>
          <View style ={styles.wrapDot}>
            {
              images.map((e, index) =>
              <Text
                key={e}
                style={imgActive == index ? styles.dotActive : styles.dot}
              >
                ●
              </Text>
                
              )
            }
          </View>
          <View
            style={{
              backgroundColor:'white',
              padding: 10,
            }}></View>
          <View
            style={{
              backgroundColor:'#e8e8e8',
              padding: 20,
            }}> 
            <Text style ={{fontSize : 16,color:'black',opacity:0.5 }}>
                  HOT
            </Text>
            </View>
      </View>
      <FlatList 
            horizontal ={true}
            data ={Categories}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator ={false}
            />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems: 'center',
  //  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor:'gray',
  
  },
  wrap: {
    width: screenWidth ,
    height: (screenHeight)*.25,
    

  },
  roundedrec: {
    borderColor: 'rgba(0,0,0,0.2)',
    //alignItems: 'center',
    //justifyContent: 'center',
    width: screenWidth * .75,
    height: screenHeight * .4,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 10,

  },
  
  wrapDot:{
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    position: 'absolute',
    bottom: 0,
    flexDirection:'row',
    alignSelf: 'center'
  },
  dotActive:{
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: '#888'
  }
});