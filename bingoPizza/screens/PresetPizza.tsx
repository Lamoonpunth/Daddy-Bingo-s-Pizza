import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, FlatList, Dimensions, Alert, TouchableOpacity } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function TabOneScreen({navigation,route}: {navigation:any,route:any}) {

  const [dough, onChangeDough] = React.useState([
    { type: 'Thick', icon: '1', key: '1' },
    { type: 'Thin', icon: '2', key: '2' },
  ]);

  const [crust, onChangeCrust] = React.useState([
    { type: 'None', icon: '3', key: '1' },
    { type: 'Sausage', icon: '4', key: '2' },
    { type: 'Cheese', icon: '5', key: '3' },
  ]);

  const [sauce, onChangeSauce] = React.useState([
    { type: 'Tomato-Based', icon: '6', key: '1' },
    { type: 'Pesto', icon: '7', key: '2' },
    { type: 'BBQ', icon: '8', key: '3' },
  ]);

  const [pack, onChangePackage] = React.useState([
    { type: 'Thick', icon: '1', key: '1' },
    { type: 'Thin', icon: '2', key: '2' },
  ]);



  const onAddCart = () => {
    Alert.alert("Add to Cart");
  }

  const onDough = () => {

  }  

  const icon = '2'

  return (
    <View style={styles.container}>

      <View style={styles.body}>
        <ScrollView>
          <View style={styles.topInfo}>
            <Text style={{ fontSize: 25, fontWeight: '600', color: '#fffbf8' ,}} > Price from </Text>
            <Text style={{ fontSize: 25, fontWeight: '600', color: '#fffbf8' }} > $12.99</Text>
          </View>
          <View style={styles.bottomInfo}>
            {/* <Image source={require('../assets/images/show.png')} style={{ width: 140, height: 110, borderRadius: 50, backgroundColor: '#EAEAEA', marginLeft: 10 }} /> */}
          </View>

          <ScrollView>
            <View>
              <Text style={{ fontSize: 25, fontWeight: '600', color: '#f15b5d' }} > Dough </Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dough}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.selection} key={item.key} onPress={() => onDough()}>
                  <Image source={images.icons[icon]} style={{ width: 140, height: 110, borderRadius: 20, backgroundColor: '#EAEAEA', marginLeft: 10 }} />
                  <Text style={{ fontSize: 14, marginTop: 5, color: '#858585', marginLeft: 10 }}>{item.type}</Text>
                </TouchableOpacity>
              )}
            />
          </ScrollView>

          <ScrollView>
            <View>
              <Text style={{ fontSize: 25, fontWeight: '600', color: '#f15b5d' }} > Crust </Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={crust}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.selection} key={item.key} onPress={() => onDough()}>
                  <Image source={images.icons[icon]} style={{ width: 140, height: 110, borderRadius: 20, backgroundColor: '#EAEAEA', marginLeft: 10 }} />
                  <Text style={{ fontSize: 14, marginTop: 5, color: '#858585', marginLeft: 10 }}>{item.type}</Text>
                </TouchableOpacity>
              )}
            />
          </ScrollView>

          <ScrollView>
            <View>
              <Text style={{ fontSize: 25, fontWeight: '600', color: '#f15b5d' }} > Sauce </Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={sauce}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.selection} key={item.key} onPress={() => onDough()}>
                  <Image source={images.icons[icon]} style={{ width: 140, height: 110, borderRadius: 20, backgroundColor: '#EAEAEA', marginLeft: 10 }} />
                  <Text style={{ fontSize: 14, marginTop: 5, color: '#858585', marginLeft: 10 }}>{item.type}</Text>
                </TouchableOpacity>
              )}
            />
          </ScrollView>

          <ScrollView>
            <View>
              <Text style={{ fontSize: 25, fontWeight: '600', color: '#f15b5d' }} > Package </Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={pack}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.selection} key={item.key} onPress={() => onDough()}>
                  <Image source={images.icons[icon]} style={{ width: 140, height: 110, borderRadius: 20, backgroundColor: '#EAEAEA', marginLeft: 10 }} />
                  <Text style={{ fontSize: 14, marginTop: 5, color: '#858585', marginLeft: 10 }}>{item.type}</Text>
                </TouchableOpacity>
              )}
            />
          </ScrollView>

        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footer} onPress={() => onAddCart()}>
          <Text style={{ fontSize: 24, color: 'black', justifyContent: 'center', alignItems: 'center' }}>{"Add to Cart"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#feeaeb'
  },
  body: {
    flex: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#feeaeb'
  },
  topInfo: {
    height: 100,
    backgroundColor: '#f89da4'
  },
  bottomInfo: {
    height: 240,
    backgroundColor: '#fceaea'
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fc9090',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  selection: {
    alignItems: 'center',
    margin: 5
  },

});

export const images = {
    icons: {
        '1': require('../assets/images/Thick.png'),
        '2': require('../assets/images/Thin.png'),
        '3': require('../assets/images/none.jpg'),
        '4': require('../assets/images/sausage.jpg'),
        '5': require('../assets/images/cheese.png'),
        '6': require('../assets/images/tomato.jpg'),
        '7': require('../assets/images/pesto.jpg'),
        '8': require('../assets/images/bbq.jpg'),
    }
}