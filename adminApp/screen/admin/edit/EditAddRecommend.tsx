import React,{useState} from "react";
import { 
    View,
    Text,
    Image,
    FlatList,
    TextInput,
    Dimensions,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
     } from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import { useFocusEffect } from '@react-navigation/native';
import { globalStyles } from "../../../styles/globalStyles";
import Gradient from "../../../styles/Gradient";
import { Picker } from "@react-native-picker/picker";

export default function EditAddRecommend({navigation,route}:{navigation:any,route:any}) {
    
    const [listOfMenu, setListOfMenu] = React.useState([]);
    const [selectedCategory, setSelectedCategory] = React.useState('Category');

    const onBackButton = () =>{
        navigation.navigate('Recommend');
    }

    const onAddMenu = (menu:any) =>{
        
    }

    const Item = ({ title }: { title: any }) => (
        <View >
          <Text style={styles.menuFont} >{title}</Text>
        </View>
      )

    const renderItem = ({ item }: { item: any }) => (
    <Item title={item.title} />
    );

    const getMenuList = async () => {
    fetch('http://10.0.2.2:3000/get' + selectedCategory, {
        method: "GET",
    }
    )
        .then(response => response.json())
        .then(json => {
        setListOfMenu(json);
        }
        )
    }

    const renderMenuBox = () => {
    const get = 'http://10.0.2.2:3000/getImage/'
    return listOfMenu.map((menu: any) => {
        return <View style={styles.menu} key={menu._id}>
        <View>
            <Image source={{ uri: get + menu.img_path }}
            style={styles.foodImage}
            />
        </View>
        <View style={styles.boxDetails}>
            <FlatList
            horizontal={true}
            scrollEnabled={false}
            keyExtractor={() => menu._id}
            data={[{ "id": menu._id, "title": menu.name }]}
            renderItem={renderItem}
            />
            <TouchableOpacity style={styles.moreBox} onPress={() => onAddMenu(menu)}>
                <Text style={{ fontSize: 20, color: '#FF6D7D' }}>Add</Text>
            </TouchableOpacity>
        </View>
        </View>
    });
    }
    useFocusEffect(
    React.useCallback(() => {
        getMenuList()
    }, [selectedCategory])
    );

    return (
        <Gradient>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {onBackButton()}}>
                        <Image source={require('../../../assets/images/back_icon.png')} style={globalStyles.backIcon}/>   
                    </TouchableOpacity>
                    <Text style={styles.fontHeader}>Add Menu</Text>
                    <View style={globalStyles.underline}></View>  
                </View>

                <View style={styles.cartContainer}>
                    <View style={styles.categoryBox}>
                        <Text style={styles.categoryFont}>Category</Text>
                        <Text style={styles.categoryFont}> : </Text>
                        <View style={styles.pickerboxinside}>
                            <Picker style={styles.pickerCategory}
                                selectedValue={selectedCategory}
                                dropdownIconColor='white'
                                mode='dropdown'
                                onValueChange={(itemValue:any) =>
                                    setSelectedCategory(itemValue)}>
                                <Picker.Item label="Category" value="Category" color='gray' enabled={false} />
                                <Picker.Item label="Appetizer" value="Appetizer" />
                                <Picker.Item label="Pizza" value="Pizza" />
                                <Picker.Item label="Drink" value="Drink" />
                                <Picker.Item label="Pasta" value="Pasta" />
                                <Picker.Item label="Dessert" value="Dessert" />
                                <Picker.Item label="À la carte" value="À la carte" />
                            </Picker>
                        </View>  
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginVertical:15}} >
                        {selectedCategory != 'Category' ?
                        renderMenuBox()
                        :null}
                    </ScrollView>
                </View>
            </View>
        </Gradient>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    header: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    fontHeader:{
        fontSize: 30,
        color:'white',
      },
    iconContainer: {
        width:screenWidth*0.9,
        flexDirection:'row',
        alignItems:'flex-start'
    },
    cartContainer: {
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'flex-start',
        width:screenWidth*.9,
        height:screenHeight*.7,
        backgroundColor:'#fff',
        borderRadius:50,
        elevation: 10,
        padding:20
    },
    categoryBox: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:screenWidth*0.8,
        height:50,
        backgroundColor:'#FF6D6D',
        borderRadius:15,
        elevation: 12,
    },
    categoryFont: {
        fontSize:20,
        color:'white',
    },
    pickerboxinside:{
        alignItems:'center',
        justifyContent:'center',
        width:screenWidth*.35,
        height:50,
        backgroundColor:'#FF6D6D',
        borderRadius:50,
    },
    pickerCategory:{
        fontSize: 20,
        color:'white',
        width: screenWidth *.4,
        height:50,
        backgroundColor: 'transparent',
    },
    menuFont: {
        fontSize: 20,
        color:'white',
        width: screenWidth * 0.4,
        height: 100,
        margin: 8,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'transparent',
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
    moreBox: {
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
    foodImage: {
        borderRadius: 50,
        backgroundColor: 'white',
        width: screenWidth * 0.30,
        height: screenWidth * 0.30,
    },
})