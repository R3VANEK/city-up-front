import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Nav = ({navigation}) => {


    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#E16824',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection:"row",
            
            justifySelf:"flex-end",
            flex:1,
            marginTop:0,
            marginBottom:3,
            position:'absolute',
            bottom:5,
            borderRadius:15
        },

        element : {
            alignItems:"center",
            justifyContent:"center",
            flex:1,
            flexDirection:"column",
            height:44
        },
        image: {
            width:30,
            height:30
        }
    });




  return (
    <View style={[styles.container]}>
      
        <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('News')}>
            <Image style={styles.image} source={require('../assets/icons/news.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('Polls')}>
            <Image style={styles.image} source={require('../assets/icons/pool.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('City')}>
            <Image style={styles.image}  source={require('../assets/icons/city.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('Contact')}>
            <Image style={styles.image} source={require('../assets/icons/contact.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('Profile')}>
            <Image style={styles.image} source={require('../assets/icons/profile.png')}/>
        </TouchableOpacity>

    </View>
  );
}



export default Nav