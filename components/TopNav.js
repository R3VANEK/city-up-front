import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';

const TopNav = ({image, pageTitle, pageDescription, showButton, link}) => {




    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#ff0000',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection:"row",
            width:100,
            
            justifySelf:"flex-start",
            alignSelf: "stretch",
            flex:1,
            marginTop:0,
            position:'absolute',
            top:0,
            width:100
            
           
        },

        element : {
            alignItems:"center",
            justifyContent:"center",
            flex:1,
            flexDirection:"column"
        },
        text:{
            flex:1
        },
        font:{
            fontSize:15,
            color:"black", 
            fontWeight:'bold'
        }
    });




  return (
    <View style={[styles.container]}>
      
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.pageTitle}>{pageTitle}</Text>
            <Text style={styles.pageDescription}>{pageDescription}</Text>
        </ImageBackground>


    </View>
  );
}



export default TopNav