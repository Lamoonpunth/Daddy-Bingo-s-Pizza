import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const { height, width } = Dimensions.get('screen');
import { globalStyles } from '../../styles/globalStyles';
import Gradient from '../../styles/Gradient';
import { FlatList } from "react-native-gesture-handler";
import { useFocusEffect } from '@react-navigation/native';

export default function DeliveryTask({ navigation, route }: { navigation: any, route: any }) {

  const [listOfTask, setListOfAdd] = React.useState([]);

  const Item = ({ title }: { title: any }) => (
    <View >
      <Text style={styles.menuFont} >{title}</Text>
    </View>
  )

  const renderItem = ({ item }: { item: any }) => (
    <Item title={item.Address} />
  );

  const [Address, onChangeAdd] = React.useState([
    { Address: '182/4', key: '1' },
  ]);

  const onBackButton = () => {
    navigation.goBack()
  }

  const onAcceptButton = () => {
    navigation.goBack()
  }

  const renderRiderTask = () => {
    
      return <View style={styles.menu}>
        <View style={styles.foodId}>
          <Text style={styles.foodId}>Order ID : 42344</Text>
        </View>
        <View style={styles.boxDetails}>
          <FlatList
            scrollEnabled={false}
            data={Address}
            renderItem={renderItem}
          />
          <TouchableOpacity style={styles.acceptBox} onPress={() => onAcceptButton()}>
            <Text style={{ fontSize: 18, color: '#FF6D7D' }}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>

  }

  return (

    <Gradient>
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => { onBackButton() }}>
            <Image source={require('../../assets/images/back_icon.png')} style={globalStyles.backIcon} />
          </TouchableOpacity>
          <Text style={globalStyles.fontHeader}>Delivery Task</Text>
          <View style={globalStyles.underline}></View>
        </View>

        <View style={styles.cartContainer}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ marginVertical: 15 }} >
            {renderRiderTask()}
          </ScrollView>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: screenWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  cartContainer: {
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * .9,
    height: screenHeight * .7,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 10,
  },
  flatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * .8,
    height: screenHeight * .65,
    backgroundColor: '#fff',
  },
  menu: {
    marginVertical: 5,
    borderRadius: 50,
    //borderWidth:1,
    borderColor: 'gray',
    backgroundColor: '#FF6D6D',
    width: screenWidth * 0.8,
    height: screenHeight * 0.22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 5
  },
  boxImage: {
    borderRadius: 20,
    backgroundColor: 'white',
    width: screenHeight * 0.125,
    height: screenHeight * 0.125,
    //borderWidth:1
  },
  boxDetails: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenHeight * 0.2,
    height: screenHeight * 0.2,
  },
  menuFont: {
    fontSize: 18,
    width: screenWidth * 0.3,
    height: screenWidth * 0.25,
    margin: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    //elevation: 12,
  },
  acceptBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenHeight * 0.1,
    height: screenHeight * 0.05,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 12,
  },
  moreFont: {
    fontSize: 18,
    color: '#FF6D7D',
  },
  ////////////////////

  item: {
    backgroundColor: '#f9c2ff',
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.05,
    marginVertical: height * 0.002,
    marginHorizontal: width * 0.1,
  },
  title: {
    fontSize: 16,
  },
  scrollHorizontalBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    //borderWidth:1,
    width: screenWidth,
    height: screenHeight * 0.2
  },
  foodId: {
    
    fontSize: 18,
    width: screenWidth * 0.30,
    height: screenWidth * 0.30,
    margin: 8,
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  morebutton: {
    //borderWidth:1,
    borderColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 12 / 100,
    height: height * 6 / 100,
    backgroundColor: '#FF6D6D',
    borderRadius: 50,
  },
});