import { StyleSheet,Dimensions } from "react-native";

const {height, width} = Dimensions.get('screen');

export const globalStyles = StyleSheet.create({
    container:{

    },
    fontHeader:{

    },
    fontNormal:{
        fontSize: 22
    },
    fontLogIn:{
        fontSize: 12,
        width: width *.6,
        height: height * 0.055,
        margin: 8,
        padding: 10,
        borderRadius: 30,
        backgroundColor: 'white',
        elevation: 12,
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerGradient: {
        flex:1,
    },
    LogInbox: {
        flex:0.9,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:width*.75,
        height:height*0.1,
        backgroundColor:'#fff',
        borderRadius:50,
        elevation: 10,
        padding:10,
    },
    loginbutton: {
        borderColor:'rgba(0,0,0,0)',
        alignItems:'center',
        justifyContent:'center',
        width:width*36/100,
        height:height*6/100,
        backgroundColor:'#FF6D6D',
        borderRadius:50,
    },
});