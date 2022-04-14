import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  Image
} from 'react-native';
import { Text, View } from '../components/Themed';
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
  return (
    <View style={styles.container}>
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
                resizeMode='stretch'
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

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems: 'center',
  //  justifyContent: 'center',
    backgroundColor: '#FF6D6D',
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
  wrap: {
    width: screenWidth,
    height: screenHeight * .25

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