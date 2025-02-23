/* eslint-disable space-infix-ops */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text,View,StyleSheet} from 'react-native';

const First = () => {
    return (
      <View>
        <Text style={styles.text}>A Smart Hostel Management App</Text>
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