import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';

const AppButton = ({link}) => {




    const styles = StyleSheet.create({
        button: {
          borderRadius: 25,
          padding: 10,
          backgroundColor: '#FAA16F',
          textAlign: 'center',
          
        },
        text: {
          color: '#fff',
          fontWeight: 'bold',
          textAlign: 'center',
          borderRadius: 15,
        }

    });




  return (
    <View style={[styles.button]} 
            onPress={()=>{console.log("test")}}
    >
      <Text style={styles.text}>Zobacz więcej</Text>
      
      </View>
  );
}



export default AppButton