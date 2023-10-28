import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, SafeAreaView, Image, FlatList, Dimensions, Button, TouchableOpacity} from 'react-native';
import AppButton from './AppButton';


const Search = ({title, author, description, image, link}) => {


const styles = StyleSheet.create({

    searchHolder: {
        width:'100%',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding:20,
        marginTop:320
    },

    filterHolder: {
        backgroundColor: "#55A4FA",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'10%',
        height:40,
        flexGrow:1,

        borderRadius: 15,
    },
    input: {
        color: "#5C5B5B",
        
    },
    inputWrapper: {
        backgroundColor: "#ffffff",
        height:'100%',
        flexGrow:4,
        flex: 1,
        marginRight:20,
        justifyContent: 'center',
        margin: 'auto',
        paddingLeft:10,
        borderRadius: 15
    }

});




const [text, onChangeText] = React.useState('');






  return (
    <View style={styles.searchHolder}>
        
        <View style={styles.inputWrapper}>
            <TextInput  style={styles.input}
                        value={text}
                        placeholder="Wyszukaj..."
                        onChangeText={onChangeText}
            />
        </View>
       

        <View style={styles.filterHolder}>
            <Image source={require('../assets/icons/filter.png')}/>
        </View>

    </View> 

  );
}



export default Search