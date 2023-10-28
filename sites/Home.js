import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Dimensions, Button, TouchableOpacity} from 'react-native';
import Nav from '../components/Nav'
import TopNav from '../components/TopNav'


const Home = ({navigation}) => {

  let cos = 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    height:60,
    backgroundColor:"white",
    marginTop:7
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
    width: "100%"

  },
  bin:{
    marginRight:0,
    height:30,
    width:30,
    position:'absolute',
    right:12
  },

});









  return (
    <SafeAreaView style={[styles.btm]}>
      <TopNav image={require("../assets/wroc1.jpg")} 
              pageTitle="Wrocław" 
              pageDescription="lorem ipsum sid dolor lorem ipsum sid dolor lorem ipsum sid dolor"
      />     

      <Nav navigation={navigation}/>
    </SafeAreaView>
  );
}



export default Home