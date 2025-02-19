/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
import {Button, Text,View} from 'react-native';
import React from 'react';
import First from './src/components/First';

const App = () => {
  return (
    <View>
   <Text style={{ fontSize:30 }}>react-native mobile app</Text>
   <Text style={{ fontSize:30 }}>react-native </Text>
   <Button title='press here' />
   <First />
   </View> 
  );
};

// const First = () => {
//   return (
//     <View>
//       <Text style={ {fontSize:30} }>welcome back</Text>
//     </View>
//   )
// }

export default App;