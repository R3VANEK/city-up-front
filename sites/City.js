import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Dimensions, Button, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler'

import { ScrollView } from 'react-native';


import Nav from '../components/Nav'
import TopNav from '../components/TopNav'
import OrganizationCard from '../components/OrganizationCard';
import Search from '../components/Search'


const City = ({navigation}) => {


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

    articleContainer: {
        marginTop:20,
        width:'100%'
    }

    

    

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

    <>
        <ScrollView>

            <TopNav image={require("../assets/wroc2.jpg")} 
                pageTitle="Lokalne organizacje" 
                pageDescription="Poznaj organizacje działające w Twojej okolicy"
            />  

            <Search/>

            <View style={styles.articleContainer}>
                {DATA.map((person) => {
                    return (
                        <OrganizationCard name="Rada miasta" description="lorem ipsum sid doloro" link="foo" />
                    );
                })}
            </View>

        </ScrollView>


        <Nav navigation={navigation}/>
    </>
           
        

        

      
  );
}



export default City