import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const WelcomeScreen = ({ navigation }) => {
 

  const handleViewMenuPress = () => {
    navigation.navigate('Menu');
  };

  const handleViewFoodPress = () => {
    navigation.navigate('Food');
  };
  const handleViewFeedbackPress = () => {
    navigation.navigate('FeedBack');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('../Images/LittleLemonLogo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
      </View>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <View style={styles.buttonContainer}>
  <Pressable onPress={handleViewMenuPress} style={styles.button}>
    <Text style={styles.buttonText}>View Menu</Text>
  </Pressable>
  <Pressable onPress={handleViewFoodPress} style={styles.button}>
    <Text style={styles.buttonText}>View Food</Text>
  </Pressable>
  <Pressable onPress={handleViewFeedbackPress} style={styles.button}>
    <Text style={styles.buttonText}>Give Feedback</Text>
  </Pressable>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.1,
    backgroundColor:'black'
  },
  headerWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
   
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#ffff',
    textAlign: 'center',
  },
  image: {
    width: 330,
    height: 80,
    borderRadius: 20,
    marginTop: 40,
    marginLeft: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   paddingEnd:10,
   color:'#ffd700'
  
  },

  button: {
    flex: 1,
    backgroundColor:"#ffd700",
    padding: 8,
    borderRadius: 10,
    height: 70,
    justifyContent:'space-around',
  marginLeft: 20,
  color:'#ffd700',
 



    
  },
 
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: "bold"
   
  },
});

export default WelcomeScreen;