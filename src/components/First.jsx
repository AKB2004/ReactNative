/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text,View,StyleSheet} from 'react-native';

const First = () => {
    return (
      <View>
        <Text style={styles.text}>A Smart Hostel Management Appk</Text>
      </View>
    )
  }

  const styles= StyleSheet.create({
    text:{
        color:'black',
        paddingBottom:50,
        marginBottom:40
    }
  });


  export default First;