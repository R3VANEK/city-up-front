import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';

const TopNav = ({image, pageTitle, pageDescription, showButton, link}) => {




    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#ff0000',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection:"row",
            
            justifySelf:"flex-start",
            flex:1,
            marginTop:0,
            position:'absolute',
            top:0,
            borderBottomRightRadius: 60,
            overflow: 'hidden'
           
        },

        image: {
            width:'100%',
            height:300,
            borderBottomRightRadius: 60
        },

        logo: {
            height:70,
            width:70,
            top:20,
            left:20,
            borderRadius: 20
        },
        pageTitle: {
            color: '#ffffff',
            fontSize: 54,
            left: 20,
            top:20
        },

        pageDescription:{
            color: '#ffffff',
            left: 10,
            padding: 20
        },
        shadow: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.8)'
        }
    });




  return (
    <View style={[styles.container]}>
      
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View styles={styles.shadow}>

                <Image source={require('../assets/logo.png')} style={styles.logo}/>
                <Text style={styles.pageTitle}>{pageTitle}</Text>
                <Text style={styles.pageDescription}>{pageDescription}</Text>
            </View>
     
        </ImageBackground>


    </View>
  );
}



export default TopNav