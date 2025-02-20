/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
import {Image,StyleSheet,View,Button} from 'react-native';
import React from 'react';
import First from './src/components/First';
import MyButton from './src/components/MyButton';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <>
    {/* <LinearGradient
      colors={['#ff7e5f', '#feb47b']} // Gradient background colors
      style={styles.gradientBackground} // Applying styles
    > */}
    <View style={styles.container}>
  <Image source={require('./src/assests/logo.png')} style={styles.image}/>
  <First/>
  <MyButton/>
   </View>
   {/* </LinearGradient>  */}
   </>
  );
};


const styles= StyleSheet.create({
  gradientBackground: {
    flex: 1
  },
  container: {
    flex: 1,             // Takes full screen height
    justifyContent: 'center',  // Centers vertically
    alignItems: 'center',      // Centers horizontally
    backgroundColor: '#43327B',
},
image: {
  width: 300,  // Set appropriate width
  height: 200, // Set appropriate height
  resizeMode: 'contain',
  // marginTop:-40 // Ensures image fits within the box
},
});






// const First = () => {
//   return (
//     <View>
//       <Text style={ {fontSize:30} }>welcome back</Text>
//     </View>
//   )
// }

export default App;