import React from 'react';
import { TouchableOpacity,Text,StyleSheet} from 'react-native';


const MyButton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed!')}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button: {
      backgroundColor: '#43328B',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 8,
      alignItems: 'center',
      
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
export default MyButton;