import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Dimensions, Button, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler'

import { ScrollView } from 'react-native';


import Nav from '../components/Nav'
import TopNav from '../components/TopNav'
import OrganizationCard from '../components/OrganizationCard';
import Search from '../components/Search'


const NewsContent = ({route}) => {

    // const {link} = route.params;

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
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        flex: '1'
      },
      contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
    },

    textContainer: {
        paddingLeft:20,
        paddingRight: 20,
        width:'100%',
        paddingBottom:20
    },

    utils: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'center',
        width: '100%',
        padding: 20,
        marginTop:310
    }, 
    utilHolder: {
        backgroundColor: "#55A4FA",
        height:70,
        width:70,
        marginRight:20,
        justifyContent: 'center',
        margin: 'auto',
        marginLeft:10,
        borderRadius: 15,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    

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

  const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."






  return (

    <>
        <ScrollView>

            <TopNav image={require("../assets/wroc2.jpg")} 
                pageTitle={"Siema"} 
            />  

            <View style={styles.utils}>
               
                <View style={styles.utilHolder}>
                    <Image source={require('../assets/icons/zoom-in.png')}/>
                </View>

                <View style={styles.utilHolder}>
                    <Image source={require('../assets/icons/zoom-out.png')}/>
                </View>

            </View>

            <View style={styles.textContainer}>
                <Text>{text}</Text>
            </View>

        </ScrollView>


    </>
           
        

        

      
  );
}



export default NewsContent