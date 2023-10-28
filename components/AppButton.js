import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';

const AppButton = ({link}) => {




    const styles = StyleSheet.create({
        button: {

        }
    });




  return (
    <Button style={[styles.button]} 
            title="Zobacz więcej"
            onPress={()=>{console.log("test")}}
    />
  );
}



export default AppButton