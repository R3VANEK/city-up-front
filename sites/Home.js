import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, FlatList, Dimensions, Button, TouchableOpacity} from 'react-native';
import Nav from '../components/Nav'
import TopNav from '../components/TopNav'

import NewsCard from '../components/NewsCard';
import PollCard from '../components/PollCard';

const Home = ({navigation}) => {


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

  heading1: {
    marginTop:340,
    fontWeight: 'bold',
    fontSize:30,
    padding:20
  },

  heading2: {
    marginTop:40,
    fontWeight: 'bold',
    fontSize:30,
    padding:20
  },

  newsView : {
    marginTop:0,
    padding:20
  }

});


const [newsData, setData] = useState([]);
const [pollData, setPollData] = useState([]);

useEffect(()=>{
    fetchData();
    fetchData1();
}, [])

const fetchData = async () => {
    try {
      const response = await fetch('http://156.17.72.80:8000/content/news', {
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

  const fetchData1 = async () => {
    try {
      const response = await fetch('http://156.17.72.80:8000/content/polls', {
        header: {
            'Accept': 'application/json; charset=UTF-8'
        }
      });
      const result = await response.json();
      console.log(result)
      setPollData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };







  return (
    <>
      <ScrollView>
        <TopNav image={require("../assets/wroc1.jpg")} 
                pageTitle="Wrocław" 
                pageDescription="lorem ipsum sid dolor lorem ipsum sid dolor lorem ipsum sid dolor"
        />    

        <Text style={styles.heading1}>
          Whats happening?
        </Text>

        <View style={styles.newsView}>
          <ScrollView
          
          horizontal={true}
          >
            {newsData.map((article) => {
                      return (
                          <NewsCard key={article.id} 
                                      title={article.title} 
                                      description={article.description} 
                                      image={article.image}
                                      author={article.organization_name} 
                                      link={"news/" + article.id} 
                                      navigation={navigation} 
                                      horizontal={true}
                          />
                      );
                  })}
          </ScrollView>
        </View> 


        <Text style={styles.heading2}>
          Take a look into polls
        </Text>

        <View style={styles.newsView}>
          <ScrollView
          
          horizontal={true}
          >
            {pollData.map((article) => {
                      return (
                          <PollCard key={article.id} 
                                      title={article.title} 
                                      description={article.description} 
                                      image={article.image}
                                      author={article.organization_name} 
                                      link={"news/" + article.id} 
                                      navigation={navigation} 
                                      horizontal={true}
                          />
                      );
                  })}
          </ScrollView>
        </View> 

        <Text style={styles.heading2}>
          Meet local organisations
        </Text>

        


        
    </ScrollView>
    <Nav navigation={navigation}/>     
    </>
  );
}



export default Home