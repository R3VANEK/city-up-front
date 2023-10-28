import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Dimensions, Button, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler'

import Nav from '../components/Nav'
import TopNav from '../components/TopNav'
import NewsCard from '../components/NewsCard'
import { ScrollView } from 'react-native-gesture-handler';


const News = ({navigation}) => {


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEDED',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile:{

        marginLeft:50,
        height : 50,
        width:50
    },
    trustedContainer:{

        width:'100%',
        alignItems:"center",
        flexDirection:"row",
        width:'100%',
        height:550,
        backgroundColor:"#ededed",
        marginTop:320
    },
    button:{
        marginTop:10,
        marginBottom:80, //skalowanie moze byc problemem
        alignItems:'center',
        backgroundColor : '#190C5'
    },
    btm : {
        justifySelf:"flex-end",
        flex:1,

    },
    bin:{
        marginRight:0,
        height:30,
        width:30,
        position:'absolute',
        right:12
    },

    holder: {
        height:500,
        marginHorizontal: 20
    },

    scrollView: {
        height: '20%',
        width: '80%',
        margin: 20,
        alignSelf: 'center',
        padding: 20,
        borderWidth: 5,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: 'lightblue'
      },
      contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        paddingBottom: 50}

    

    

});


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];






  return (
            <ScrollView 
                style={styles.scrollView} 
                contentContainerStyle={styles.contentContainer}
            >

            <TopNav image={require("../assets/wroc2.jpg")} 
                pageTitle="Co w trawie piszczy?" 
                pageDescription="Przeczytaj najnowsze wiadomości z Twojej okolicy"
            />  

<Nav navigation={navigation}/>
            </ScrollView>
       
        

        

        

      
  );
}



export default News