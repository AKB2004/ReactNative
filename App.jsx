/* eslint-disable eol-last */


import {Image,StyleSheet,View} from 'react-native';
import React from 'react';
import First from './src/components/First';
import MyButton from './src/components/MyButton';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <>
    <LinearGradient
      colors={['white', '#43328B']}
      style={styles.gradientBackground}
    >
    <View style={styles.container}>
  <Image source={require('./src/assests/logo.png')} style={styles.image}/>
  <First/>
  <MyButton/>
   </View>
   </LinearGradient>
   </>
  );
};


const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,             // Takes full screen height
    justifyContent: 'center',  // Centers vertically
    alignItems: 'center',      // Centers horizontally
    // backgroundColor: '#43327B',
},
image: {
  width: 300,  // Set appropriate width
  height: 200, // Set appropriate height
  resizeMode: 'contain',
  // marginTop:-40 // Ensures image fits within the box
},
});

export default App;