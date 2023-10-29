import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Dimensions, Button, TouchableOpacity} from 'react-native';
import Nav from '../components/Nav'
import TopNav from '../components/TopNav'
import AppButton from './AppButton';


const PollCard = ({title, author, description, image, link, navigation}) => {


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEDED',
        alignItems: 'center',
        justifyContent: 'center',
    },
    

    article:{
        color:'red',
        backgroundColor:'#ffffff',
        height:500,
        borderRadius:15,
        width:350,
        alignSelf:'center',
        marginTop:30,
        marginBottom:80
    },

    articleTitle:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        padding:10
    },

    articleText:{
        fontSize:15,
        marginBottom:10,
        marginTop:50,
        marginRight:10,
        marginLeft:10,
    },

    articleImage:{
        width:350,
        height:150,
        borderRadius:10
    },

    authorHolder: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft:10,
        position: 'absolute',
        top:230
    },
    authorImage: {
        width: 30,
        height: 30,
        borderRadius: 15,

    },
    authorName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        color: "#55A4FA"
    },

    buttonHolder: {
        width: 340,
        alignSelf: 'center',
        marginBottom:10,
        position: 'absolute',
        bottom:0,
        textAlign: 'center',
        justifyContent  : 'center',
        alignContent: 'center',
        flexDirection: 'row'
    },

    voteHolder: {
        flexDirection: 'row',
        marginLeft:50,
        justifyContent: 'center',
        alignContent: 'center'
    },
    likeTrue: {
        borderColor: '#82ED50',
        borderWidth: 2,
        borderRadius:20,
        padding: 5
    }

});









  return (
    <View style={styles.article}>
        <Image source={{
            uri: image,
            }} 
            style={styles.articleImage}/>
        <Text style={styles.articleTitle}>{title}</Text>
        <View style={styles.authorHolder}>
            <Image source={require('../assets/icons/profile.png')} style={styles.authorImage}/>
            <Text style={styles.authorName}>{author}</Text>
        </View>

        <Text style={styles.articleText}>{description}</Text>
        <View style={styles.buttonHolder}>
            <AppButton link={link} navigation={navigation} target={'Home'}/>
            <View style={styles.voteHolder}>
                <View style={styles.likeTrue}>
                    <Image source={require('../assets/icons/like.png')}/>
                </View>
            </View>
        </View>

    </View> 

  );
}



export default PollCard