import React from "react";
import { Image, StyleSheet, TextInput, Dimensions, View, Text, Pressable} from "react-native";
import { Picker } from "@react-native-picker/picker";

const {height, width} = Dimensions.get('screen');



const RegInfoText = () => {
  const [firstname, onChangeName] = React.useState('');
  const [lastname, onChangeLast] = React.useState('');
  const [phone, onChangeNumber] = React.useState('');
  const [address, onChangeAddr] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedMonth, setSelectedMonth] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image 
          style={styles.nameicon}
          source={require('../assets/images/user_icon.png')}
          />
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={firstname}
          placeholder="First Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeLast}
          value={lastname}
          placeholder="Last name"
        />

        
      </View>
      <View style={styles.box1}>
        <Image 
          style={styles.phonenumicon}
          source={require('../assets/images/phone_icon.png')}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={phone}
          placeholder="Phone number"
        />
        <Image 
          style={styles.birthicon}
          source={require('../assets/images/birthdate_icon.png')}
          />
          

      </View>
      <View style={styles.box1}>
        <Image 
          style={styles.phonenumicon}
          source={require('../assets/images/address_icon.png')}
        />
        <TextInput
          style={styles.input2}
          onChangeText={onChangeAddr}
          value={address}
          placeholder="Address"
        />
        

      </View>
      <Picker style={styles.pickermonth}
          selectedValue={selectedMonth}
          dropdownIconColor='#FF6D6D'
          mode='dropdown'
          prompt= "Month"
          onValueChange={(itemValue, itemIndex) =>
            setSelectedMonth(itemValue)
          }>
          <Picker.Item label="January" value="1" />
          <Picker.Item label="Febuary" value="2" />
          <Picker.Item label="March" value="3" />
          <Picker.Item label="April" value="4" />
          <Picker.Item label="May" value="5" />
          <Picker.Item label="June" value="6" />
          <Picker.Item label="July" value="7" />
          <Picker.Item label="August" value="8" />
          <Picker.Item label="September" value="9" />
          <Picker.Item label="October" value="10" />
          <Picker.Item label="November" value="11" />
          <Picker.Item label="December" value="12" />
        </Picker>
        <Picker style={styles.pickermonth}
          selectedValue={selectedDate}
          dropdownIconColor='#FF6D6D'
          mode='dropdown'
          prompt= "Date"
          onValueChange={(itemValue, itemIndex) =>
            setSelectedDate(itemValue)
          }>
          <Picker.Item label="2022" value="0" />
          <Picker.Item label="2021" value="1" />
          <Picker.Item label="2020" value="2" />
          <Picker.Item label="2019" value="3" />  
          <Picker.Item label="2018" value="4" />
          <Picker.Item label="2017" value="5" />
          <Picker.Item label="2016" value="6" />
          <Picker.Item label="2015" value="7" />
          <Picker.Item label="2014" value="8" />
          <Picker.Item label="2013" value="9" />
          <Picker.Item label="2012" value="10" />
          <Picker.Item label="2011" value="11" />
          <Picker.Item label="2010" value="12" />
          <Picker.Item label="2009" value="13" />
          <Picker.Item label="2008" value="14" />
          <Picker.Item label="2007" value="15" />
          <Picker.Item label="2006" value="16" />
          <Picker.Item label="2005" value="17" />
          <Picker.Item label="2004" value="18" />
          <Picker.Item label="2003" value="19" />
          <Picker.Item label="2002" value="20" />
          <Picker.Item label="2001" value="21" />
          <Picker.Item label="2000" value="22" />
          <Picker.Item label="1999" value="23" />
          <Picker.Item label="1998" value="24" />
          <Picker.Item label="1997" value="25" />
          <Picker.Item label="1996" value="26" />
          <Picker.Item label="1995" value="27" />
          <Picker.Item label="1994" value="28" />
          <Picker.Item label="1993" value="29" />
          <Picker.Item label="1992" value="30" />
          <Picker.Item label="1991" value="31" />
          <Picker.Item label="1990" value="32" />
          <Picker.Item label="1989" value="33" />
          <Picker.Item label="1988" value="34" />
          <Picker.Item label="1987" value="35" />
          <Picker.Item label="1986" value="36" />
          <Picker.Item label="1985" value="37" />
          <Picker.Item label="1984" value="38" />
          <Picker.Item label="1983" value="39" />
          <Picker.Item label="1982" value="40" />
          <Picker.Item label="1981" value="41" />
          <Picker.Item label="1980" value="42" />
          <Picker.Item label="1979" value="43" />
          <Picker.Item label="1978" value="44" />
          <Picker.Item label="1977" value="45" />
          <Picker.Item label="1976" value="46" />
          <Picker.Item label="1975" value="47" />
          <Picker.Item label="1974" value="48" />
          <Picker.Item label="1973" value="49" />
          <Picker.Item label="1972" value="50" />
          <Picker.Item label="1971" value="51" />
          <Picker.Item label="1970" value="52" />
          <Picker.Item label="1969" value="53" />
          <Picker.Item label="1968" value="54" />
          <Picker.Item label="1967" value="55" />
          <Picker.Item label="1966" value="56" />
          <Picker.Item label="1965" value="57" />
          <Picker.Item label="1964" value="58" />
          <Picker.Item label="1963" value="59" />
          <Picker.Item label="1962" value="60" />
          <Picker.Item label="1961" value="61" />
          <Picker.Item label="1960" value="62" />
          <Picker.Item label="1959" value="63" />
          <Picker.Item label="1958" value="64" />
          <Picker.Item label="1957" value="65" />
          <Picker.Item label="1956" value="66" />
          <Picker.Item label="1955" value="67" />
          <Picker.Item label="1954" value="68" />  
          <Picker.Item label="1953" value="69" />
          <Picker.Item label="1952" value="70" />
          <Picker.Item label="1951" value="71" />
          <Picker.Item label="1950" value="72" />
          <Picker.Item label="1949" value="73" />
          <Picker.Item label="1948" value="74" />
          <Picker.Item label="1947" value="75" />
          <Picker.Item label="1946" value="76" />
          <Picker.Item label="1945" value="77" />
          <Picker.Item label="1944" value="78" />
          <Picker.Item label="1943" value="79" />
          <Picker.Item label="1942" value="80" />
        </Picker>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'transparent',
    borderWidth: 1,
  },
  input: {
    fontSize: 12,
    width: width *.27,
    height: height * 0.045,
    margin: 8,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 12,
  },
  input2: {
    fontSize: 12,
    width: width *.58,
    height: height * 0.045,
    margin: 8,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  loginbutton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:width*36/100,
    height:height*6/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
  },
  box1: {
    flexDirection: "row",

  },
  nameicon: {
    width: 30,
    height:45,
  },
  phonenumicon: {
    width: 30,
    height:45,
  },
  birthicon:{
    width: 30,
    height:40,
  },
  addricon:{
    width: 50,
    height:50,
  },
  pickermonth:{
    fontSize: 12,
    width: width *.3,
    height: height * 0.025,
    margin: 8,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 12,

  },
  pickerdate:{
    fontSize: 12,
    width: width *.3,
    height: height * 0.025,
    margin: 8,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 12,

  },
});

export default RegInfoText;