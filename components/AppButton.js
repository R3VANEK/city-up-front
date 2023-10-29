import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';

const AppButton = ({link, navigation, target}) => {




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


    const data = {
      link: link,
      navigation: navigation
    }

  return (
    <TouchableOpacity onPress={()=>navigation.navigate(target)}>
    <View style={[styles.button]} // FIX ME - PASSING PARAMS DONT WORK
            onPress={()=>navigation.navigate(target, {data})}

    >
    
      <Text style={styles.text}>Zobacz więcej</Text>
      
      </View>
    </TouchableOpacity>
  );
}



export default AppButton