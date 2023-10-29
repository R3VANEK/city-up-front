import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Dimensions, Button, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler'

import { ScrollView } from 'react-native';


import Nav from '../components/Nav'
import TopNav from '../components/TopNav'
import Search from '../components/Search'
import PollCard from '../components/PollCard';


const Polls = ({navigation}) => {


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

const [data, setData] = useState([]);

useEffect(()=>{
    fetchData();
}, [])

const fetchData = async () => {
    try {
      const response = await fetch('http://156.17.72.80:8000/content/polls', {
        header: {
            'Accept': 'application/json; charset=UTF-8'
        }
      });
      const result = await response.json();
      console.log(result)
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };





  return (

    <>
        <ScrollView>

            <TopNav image={require("../assets/wroc2.jpg")} 
                pageTitle="Decide!" 
                pageDescription="Give your opinion in polls to better your city "
            />  

            <Search/>

            <View style={styles.articleContainer}>
                {data.map((poll) => {
                    return (
                        <PollCard key={poll.id} title={poll.title} description={poll.description} author={poll.organization_name} image={poll.image} link="foo" navigation={navigation}/>
                    );
                })}
            </View>

        </ScrollView>


        <Nav navigation={navigation}/>
    </>
           
        

        

      
  );
}



export default Polls